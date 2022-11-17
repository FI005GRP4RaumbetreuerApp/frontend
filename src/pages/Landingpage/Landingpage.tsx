import { report } from 'process'
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
import useGetOwnRoom from '../../api/useGetOwnRoom'
import AppContext from '../../AppContext'
import PageLayout from '../../layouts'
import { Report, Room, User } from '../../types'
import { ReportingForm } from './ReportingForm'

export const Landingpage: FC = () => {
  const [cookies] = useCookies(['access_token'])

  const [eigeneMeldungen, setEigeneMeldungen] = React.useState<Report[]>([])
  const [raumMeldungen, setRaumMeldungen] = React.useState<Report[]>([])
  const [raumBetreuerMeldungen, setRaumBetreuerMeldungen] = React.useState<
    Report[]
  >([])
  const [raumAlleMeldungen, setAlleMeldungen] = React.useState<Report[]>([])

  const [user, setUser] = React.useState<User>()

  const { certainRoomIdReports, selectedRoomId } = React.useContext(AppContext)

  const getSelfMadeReports = useGetSelfMadeReports()

  const getRoomSupervisorReports = useGetRoomSupervisorReports()
  const getAllReportsReports = useGetAllReports()
  const getUser = useGetUser()

  React.useEffect(() => {
    getSelfMadeReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setEigeneMeldungen(report)
    )
  }, [])

  const getOwnRoom = useGetOwnRoom()

  const roomReports = []

  React.useEffect(() => {
    getOwnRoom({ accessToken: cookies.access_token }).then((rooms: Room[]) =>
      rooms.map((room) =>
        getRoomSupervisorReports({
          accessToken: cookies.access_token,
          id: room.id,
        }).then((report: Report[]) => roomReports.push(report))
      )
    )
    setRaumBetreuerMeldungen(roomReports)
  }, [])

  React.useEffect(() => {
    getAllReportsReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setAlleMeldungen(report)
    )
  }, [])

  return (
    <PageLayout showHeaderButtons={true}>
      <ReportingForm selectRoom={''} />
      <div className="px-64 gap-4 flex flex-col w-full h-full bg-backgroundGray justify-center items-center">
        <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full">Eigene Meldungen</div>
          </div>
          {eigeneMeldungen.map((report) => (
            <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
              <div className="w-full">{report.description}</div>
              <div className="justify-between w-2/5 flex flex-row">
                <div>{report.room}</div>
                <div>{report.status}</div>
              </div>
            </div>
          ))}
        </div>
        {certainRoomIdReports.length > 1 && (
          <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
            <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full">Ausgewählter Raum</div>
            </div>
            {certainRoomIdReports.map((report) => (
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
        <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full">Meldungen für den Raumbetreuer</div>
          </div>
          {raumBetreuerMeldungen.flat(Infinity).map((report) => (
            <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-sm text-stone-500 rounded-xl">
              <div className="w-full">{report.description}</div>
              <div className="justify-between w-2/5 flex flex-row">
                <div>{report.room}</div>
                <div>{report.status}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full">Alle Meldungen</div>
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
      </div>
    </PageLayout>
  )
}
