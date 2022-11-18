import React, { FC, useEffect, useState } from 'react'
import { Dialog, Listbox } from '@headlessui/react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import useAddReport from '../../api/useAddReport'
import { AddReport } from '../../types/AddReport'
import Input from '../../components/Input'
import { useGetRooms } from '../../api'
import { Report, Room } from '../../types'

interface Props {
  selectRoom: string
}

const reportTypes = [
  { id: 1, key: 'DEFEKT', label: 'Defekt' },
  { id: 2, key: 'FEHLEND', label: 'Fehlend' },
]
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

export const ReportingForm: FC<Props> = ({ selectRoom }) => {
  const [openDialogForm, setOpenDialogForm] = useState(false)
  const [cookies] = useCookies(['access_token'])
  const history = useHistory()
  const AddReportForm = useAddReport()
  const [meldungsTyp, setMeldungsTyp] = useState<string>('')
  const [raumId, setraumId] = useState('')
  const [geraeteTypId, setGeraeteTypId] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [geraeteId, setGeraeteId] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const [errorMessage, setErrorMessage] = useState<string>('')

  const [rooms, setRooms] = useState<Room[]>([])

  const getRooms = useGetRooms()

  getRooms({ accessToken: cookies.access_token }).then((res: Room[]) =>
    setRooms(res)
  )

  const addReportForm = async (
    accessToken: string,
    meldungs_typ: string,
    raum_id: string,
    geraete_typ_id: string,
    description: string,
    geraete_id: string,
    status: string
  ): Promise<void> => {
    try {
      const addReportResponse: AddReport[] = await AddReportForm({
        accessToken,
        meldungs_typ,
        raum_id,
        geraete_typ_id,
        description,
        geraete_id,
        status,
      })

      if (addReportResponse) {
        // setOpenDialogForm(false)
        history.push('/overview')
      }
    } catch (e) {
      if (e.response.status === 401) history.push('/')
      setErrorMessage(e.response.data)
      console.log(e.response.data)
    }
  }

  return (
    <div className="flex py-5 items-start justify-start px-64 mr-auto">
      <button
        type="button"
        onClick={() => setOpenDialogForm(true)}
        className="flex items-center bg-secondary hover:bg-primary w-fit h-12 px-2 pr-4 py-1 rounded-3xl text-white text-xl gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-base">Neue Meldung</span>
      </button>
      <Dialog
        open={openDialogForm}
        onClose={() => setOpenDialogForm(true)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/75 " aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <div className="h-full min-h-96">
            <Dialog.Panel className="w-full h-fit flex flex-col max-w-2xl bg-white rounded-2xl">
              <Dialog.Title className="flex justify-center items-center bg-primary text-white font-bold h-16 rounded-t-2xl">
                Defekt für Raum {raumId} melden
              </Dialog.Title>
              {errorMessage.length > 0 ? (
                <div className="px-5 py-3 text-red-700 bg-red-100">
                  {errorMessage}
                </div>
              ) : null}

              <div className="flex flex-col gap-4 w-full h-fit bg-white px-4 py-12 md:px-32">
                <Input
                  type="text"
                  placeHolder="Name des Defekts"
                  onChange={(value: string) => setMeldungsTyp(value)}
                />
                <Input
                  type="text"
                  placeHolder="Geräte ID"
                  onChange={(value: string) => setGeraeteId(value)}
                />

                <div className="relative">
                  <Listbox value={raumId} onChange={setraumId}>
                    <Listbox.Button className="flex justify-between items-center text-left bg-backgroundGray px-5 py-2 rounded-2xl w-96 placeholder-neutral-600 text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                      <span>
                        {raumId
                          ? rooms.find((s) => s.id === raumId)
                          : 'Raum auswählen'}
                      </span>
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="w-full absolute top-10 left-0 z-50 bg-white p-3 rounded-xl h-44 overflow-y-auto shadow flex flex-col gap-2 divide-y">
                      {rooms.map((room) => (
                        <Listbox.Option
                          key={room.id}
                          value={room.id}
                          className="cursor-pointer hover:bg-secondary px-2"
                        >
                          {room.id}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div className="relative">
                  <Listbox value={status} onChange={setStatus}>
                    <Listbox.Button className="flex justify-between items-center text-left bg-backgroundGray px-5 py-2 rounded-2xl w-96 placeholder-neutral-600 text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                      <span>
                        {status
                          ? meldungsStatus.find((s) => s.key === status).label
                          : 'Meldungsstatus auswählen'}
                      </span>
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="w-full absolute top-10 left-0 z-50 bg-white p-3 rounded-xl shadow flex flex-col gap-2 divide-y">
                      {meldungsStatus.map((status) => (
                        <Listbox.Option
                          key={status.id}
                          value={status.key}
                          className="cursor-pointer hover:bg-secondary px-2"
                        >
                          {status.label}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>
                <div className="relative">
                  <Listbox value={meldungsTyp} onChange={setMeldungsTyp}>
                    <Listbox.Button className="flex justify-between items-center text-left bg-backgroundGray px-5 py-2 rounded-2xl w-96 placeholder-neutral-600 text-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                      <span>
                        {meldungsTyp
                          ? reportTypes.find((s) => s.key === meldungsTyp).label
                          : 'Meldungstype auswählen'}
                      </span>
                      <span className="">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          />
                        </svg>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="w-full absolute top-10 left-0 z-50 bg-white p-3 rounded-xl shadow flex flex-col gap-2 divide-y">
                      {reportTypes.map((personType) => (
                        <Listbox.Option
                          key={personType.id}
                          value={personType.key}
                          className="cursor-pointer hover:bg-secondary px-2"
                        >
                          {personType.label}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Listbox>
                </div>

                <Input
                  type="text"
                  placeHolder="Beschreibung"
                  onChange={(value: string) => setDescription(value)}
                />
              </div>
              <div className="flex justify-center items-center bg-primary h-16 w-full gap-4 rounded-b-2xl">
                <button
                  className="w-32 rounded-2xl py-1 px-2 bg-gray-400 text-gray-700 hover:text-slate-200 hover:outline hover:outline-secondary hover:bg-primary"
                  onClick={() => setOpenDialogForm(false)}
                >
                  Abbrechen
                </button>
                <button
                  className="w-32 rounded-2xl py-1 px-2 bg-secondary text-slate-200 hover:outline hover:outline-secondary hover:bg-primary"
                  onClick={() =>
                    addReportForm(
                      cookies.access_token,
                      meldungsTyp,
                      raumId,
                      geraeteTypId,
                      description,
                      geraeteId,
                      status
                    )
                  }
                >
                  Absenden
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
