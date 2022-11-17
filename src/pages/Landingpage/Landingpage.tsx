import React, { useEffect } from 'react'
import { FC } from 'react'
import { useCookies } from 'react-cookie'
import {
  useGetAllReports,
  useGetRoomReports,
  useGetRoomSupervisorReports,
  useGetSelfMadeReports,
  useGetUser,
} from '../../api'
import AppContext from '../../AppContext'
import PageLayout from '../../layouts'
import { Report, User } from '../../types'
import { ReportingForm } from './ReportingForm'

export const Landingpage: FC = () => {
  const [cookies] = useCookies(['access_token'])

  const [eigeneMeldungen, setEigeneMeldungen] = React.useState<Report[]>([])
  const [raumMeldungen, setRaumMeldungen] = React.useState<Report[]>([])
  const [raumBetreuerMeldungen, setRaumBetreuerMeldungen] = React.useState<
    Report[]
  >([])
  const [raumAlleMeldungen, setAlleMeldungen] = React.useState<Report[]>([])

  const { certainRoomIdReports, selectedRoomId, setUserData, userData } =
    React.useContext(AppContext)

  const getSelfMadeReports = useGetSelfMadeReports()

  const getRoomSupervisorReports = useGetRoomSupervisorReports()
  const getAllReportsReports = useGetAllReports()
  const getUser = useGetUser()

  useEffect(() => {
    getUser({ accessToken: cookies.access_token }).then((userData: User) => {
      setUserData(userData)
    })
  }, [])

  React.useEffect(() => {
    getSelfMadeReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setEigeneMeldungen(report)
    )
  }, [])

  React.useEffect(() => {
    getRoomSupervisorReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setRaumBetreuerMeldungen(report)
    )
  }, [])

  React.useEffect(() => {
    getAllReportsReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setAlleMeldungen(report)
    )
  }, [])

  return (
    <PageLayout showHeaderButtons={true}>
      <ReportingForm selectRoom={''} />
      <div className="gap-4 flex flex-col max-w-sm sm:max-w-full w-full px-4 sm:px-16 md:px-24 lg:px-32 xl:px-64 h-full bg-backgroundGray justify-center items-center">
        <div className="overflow-y-scroll my-4 min-h-fit max-h-128 pb-6 px-2 sm:px-8 mx-32 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full text-center">Eigene Meldungen</div>
          </div>
          {eigeneMeldungen.map((report) => (
            <div className="hover:bg-gray-300 py-8 px-2 sm:px-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
              <div className={'w-full'}>{report.description}</div>
              <div className="justify-between w-2/5 flex flex-row">
                <div>{report.room}</div>
                <div
                  className={`${
                    report.status === 'NEU'
                      ? 'animate-bounce text-green-500'
                      : ''
                  }`}
                >
                  {report.status}
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
                  <div className="w-full">{report.description}</div>
                  <div className="justify-between w-2/5 flex flex-row">
                    <div>{report.room}</div>
                    <div>{report.status}</div>
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
        {userData?.role === 'RAUMBETREUER' && (
          <div className="overflow-y-scroll my-4 min-h-fit max-h-128 pb-6 px-8 w-full bg-white rounded-3xl">
            <div className="font-bold py-8 px-2 sm:px-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full text-center">
                Meldungen für den Raumbetreuer
              </div>
            </div>
            {raumBetreuerMeldungen.map((report) => (
              <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
                <div className="w-full">{report.description}</div>
                <div className="justify-between w-2/5 flex flex-row">
                  <div>{report.room}</div>
                  <div>{report.status}</div>
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
                <div className="w-full">{report.description}</div>
                <div className="justify-between w-2/5 flex flex-row">
                  <div>{report.room}</div>
                  <div>{report.status}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  )
}
