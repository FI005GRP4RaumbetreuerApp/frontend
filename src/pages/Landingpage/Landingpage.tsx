import React from 'react'
import { FC } from 'react'
import { useCookies } from 'react-cookie'
import {
  useGetAllReports,
  useGetRoomReports,
  useGetRoomSupervisorReports,
  useGetSelfMadeReports,
  useGetUser,
} from '../../api'
import PageLayout from '../../layouts'
import { Report, User } from '../../types'

export const Landingpage: FC = () => {
  const [cookies] = useCookies(['access_token'])

  const [eigeneMeldungen, setEigeneMeldungen] = React.useState<Report[]>([])
  const [raumMeldungen, setRaumMeldungen] = React.useState<Report[]>([])
  const [raumBetreuerMeldungen, setRaumBetreuerMeldungen] = React.useState<
    Report[]
  >([])
  const [raumAlleMeldungen, setAlleMeldungen] = React.useState<Report[]>([])

  const [user, setUser] = React.useState<User>()

  const [selectedRoom, setSelectedRoom] = React.useState('')

  const getSelfMadeReports = useGetSelfMadeReports()
  const getRoomReports = useGetRoomReports()

  const getRoomSupervisorReports = useGetRoomSupervisorReports()
  const getAllReportsReports = useGetAllReports()
  const getUser = useGetUser()

  React.useEffect(() => {
    getUser({ accessToken: cookies.access_token }).then((user: User) =>
      setUser(user)
    )
  }, [])

  React.useEffect(() => {
    getSelfMadeReports({ accessToken: cookies.access_token }).then(
      (report: Report[]) => setEigeneMeldungen(report)
    )
  }, [])

  // React.useEffect(() => {
  //   console.log('HALLK')
  //   getRoomReports({
  //     accessToken: cookies.access_token,
  //     id: localStorage.getItem('selected-room'),
  //   }).then((report: Report[]) => setRaumMeldungen(report))
  // }, [])

  React.useEffect(() => {
    window.addEventListener('storage', () => {
      getRoomReports({
        accessToken: cookies.access_token,
        id: localStorage.getItem('selected-room'),
      }).then((report: Report[]) => setRaumMeldungen(report))
    })
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
        <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full">Ausgewählter Raum</div>
          </div>
          {raumMeldungen.map((report) => (
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
            <div className="w-full">Meldungen für den Raumbetreuer</div>
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
