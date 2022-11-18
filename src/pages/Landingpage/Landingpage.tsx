import React, { useEffect } from 'react'
import { FC } from 'react'
import { useCookies } from 'react-cookie'
import {
  useGetAllReports,
  useGetRoomSupervisorReports,
  useGetSelfMadeReports,
  useGetUser,
} from '../../api'
import useGetOwnRoom from '../../api/useGetOwnRoom'
import AppContext from '../../AppContext'
import PageLayout from '../../layouts'
import { Report, Room, User } from '../../types'
import { ReportingForm } from './ReportingForm'

export const Landingpage: FC = () => {
  const [cookies] = useCookies(['access_token'])

  const [eigeneMeldungen, setEigeneMeldungen] = React.useState<Report[]>([])
  const [raumBetreuerMeldungen, setRaumBetreuerMeldungen] = React.useState<
    Report[][]
  >([])
  const [raumAlleMeldungen, setAlleMeldungen] = React.useState<Report[]>([])

  const {
    certainRoomIdReports,
    selectedRoomId,
    setUserData,
    userData,
    newReportIncoming,
    setNewReportIncoming,
  } = React.useContext(AppContext)

  const getSelfMadeReports = useGetSelfMadeReports()

  const getRoomSupervisorReports = useGetRoomSupervisorReports()
  const getAllReportsReports = useGetAllReports()
  const getUser = useGetUser()

  const meldungsStatus = [
    { id: 1, key: 'NEU', label: 'Neu' },
    {
      id: 2,
      key: 'IN_BEARBEITUNG_RAUMBETREUER',
      label: 'In Beareitung Raumbetreuer',
    },
    {
      id: 2,
      key: 'IN_BEARBEITUNG_PC_WERKSTATT',
      label: 'In Bearbeitung PC Werkstatt',
    },
    { id: 2, key: 'GESCHLOSSEN', label: 'Geschlossen' },
  ]

  useEffect(() => {
    getUser({ accessToken: cookies.access_token }).then((userData: User) => {
      setUserData(userData)
    })
  }, [])

  React.useEffect(() => {
    getSelfMadeReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setEigeneMeldungen(report.reverse())
    )
  }, [])

  React.useEffect(() => {
    getSelfMadeReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setEigeneMeldungen(report.reverse())
    )
    setNewReportIncoming(false)
  }, [newReportIncoming])

  const getOwnRoom = useGetOwnRoom()

  React.useEffect(() => {
    const allRaumBetreuerMeldungen = []
    if (raumBetreuerMeldungen.length === 0)
      getOwnRoom({ accessToken: cookies.access_token }).then(
        (rooms: Room[]) => {
          console.log('rooms', rooms)

          rooms.forEach((room, index) =>
            getRoomSupervisorReports({
              id: room.id,
              accessToken: cookies.access_token,
            }).then((report: Report[]) => {
              allRaumBetreuerMeldungen.push(report)
              if (index === rooms.length)
                setRaumBetreuerMeldungen(allRaumBetreuerMeldungen)
            })
          )
        }
      )
  }, [])

  React.useEffect(() => {
    if (userData?.role === 'PC_WERKSTATT')
      getAllReportsReports({ accessToken: cookies.access_token }).then(
        (report: Report[]) => setAlleMeldungen(report)
      )
  }, [])

  return (
    <PageLayout showHeaderButtons={true}>
      <ReportingForm />
      <div className="gap-4 flex flex-col max-w-sm sm:max-w-full w-full px-4 sm:px-16 md:px-24 lg:px-32 xl:px-64 h-full bg-backgroundGray justify-center items-center">
        <div className="overflow-y-scroll my-4 min-h-fit max-h-128 pb-6 px-2 sm:px-8 mx-32 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full text-center">Eigene Meldungen</div>
          </div>
          {eigeneMeldungen.map((report) => (
            <div className="hover:bg-gray-300 py-8 px-2 sm:px-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
              <div className={'w-full break-all'}>
                {report.description || 'Keine Beschreibung verfügbar'}
              </div>
              <div className="justify-between w-4/5 flex flex-row ">
                <div className="w-full">{report.room}</div>
                <div
                  className={`w-full text-center ${
                    report.status === 'NEU'
                      ? 'animate-bounce text-green-500'
                      : ''
                  }`}
                >
                  {
                    meldungsStatus.find(
                      (status) => status.key === report.status
                    ).label
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedRoomId && (
          <div className="overflow-y-scroll my-4 min-h-fit max-h-128 pb-6 px-8 w-full bg-white rounded-3xl">
            <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full text-center">
                {'Ausgewählter Raum: ' + selectedRoomId}
              </div>
            </div>
            {certainRoomIdReports.length > 0 ? (
              certainRoomIdReports.map((report) => (
                <div className="hover:bg-gray-300 py-8 px-2 sm:px-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
                  <div className="w-full break-all">
                    {report.description || 'Keine Beschreibung verfügbar'}
                  </div>
                  <div className="justify-between w-4/5 flex flex-row">
                    <div className="w-full">{report.room}</div>
                    <div
                      className={`w-full text-center ${
                        report.status === 'NEU'
                          ? 'animate-bounce text-green-500'
                          : ''
                      }`}
                    >
                      {
                        meldungsStatus.find(
                          (status) => status.key === report.status
                        ).label
                      }
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-stone-500 text-xl text-center">
                Aktuell gibt es keine Meldungen für diesen Raum
              </div>
            )}
          </div>
        )}
        {userData?.role !== 'RAUMBETREUER' && (
          <div className="overflow-y-scroll my-4 min-h-fit max-h-128 pb-6 px-8 w-full bg-white rounded-3xl">
            <div className="font-bold py-8 px-2 sm:px-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full text-center">
                Meldungen für {userData?.vorname + ' ' + userData?.nachname}
              </div>
            </div>
            {raumBetreuerMeldungen.flat(2).map((report) => (
              <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
                <div className="w-full break-all">
                  {report.description || 'Keine Beschreibung verfügbar'}
                </div>
                <div className="justify-between w-4/5 flex flex-row">
                  <div className="w-full">{report.room}</div>
                  <div
                    className={`w-full text-center ${
                      report.status === 'NEU'
                        ? 'animate-bounce text-green-500'
                        : ''
                    }`}
                  >
                    {
                      meldungsStatus.find(
                        (status) => status.key === report.status
                      ).label
                    }
                  </div>{' '}
                </div>
              </div>
            ))}
          </div>
        )}
        {userData?.role === 'PC_WERKSTATT' && (
          <div className="overflow-y-scroll my-4 min-h-fit max-h-128 pb-6 px-8 w-full bg-white rounded-3xl">
            <div className="font-bold py-8 px-2 sm:px-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full text-center">Alle Meldungen</div>
            </div>
            {raumAlleMeldungen.map((report) => (
              <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
                <div className="w-full break-all">
                  {report.description || 'Keine Beschreibung verfügbar'}
                </div>
                <div className="justify-between w-4/5 flex flex-row">
                  <div className="w-full">{report.room}</div>
                  <div
                    className={`w-full text-center ${
                      report.status === 'NEU'
                        ? 'animate-bounce text-green-500'
                        : ''
                    }`}
                  >
                    {
                      meldungsStatus.find(
                        (status) => status.key === report.status
                      ).label
                    }
                  </div>{' '}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  )
}
