import axios from 'axios'
import { AddReport } from "../types/AddReport";

interface useAddReportsProps {
  accessToken: string
  meldungs_typ: string
  raum_id: string
  geraete_typ_id: string
  description: string
  geraete_id: string
  status: string
}

const useAddReports = (): ({
                             accessToken,
                             meldungs_typ,
                             raum_id,
                             geraete_typ_id,
                             description,
                             geraete_id,
                             status
                           }: useAddReportsProps) => Promise<AddReport[]> => {
  return async ({ accessToken,meldungs_typ,raum_id,geraete_typ_id,description,geraete_id,status }: useAddReportsProps): Promise<AddReport[]> => {

    const bodyContent = {
      meldungs_typ,
      raum_id,
      geraete_typ_id,
      description,
      geraete_id,
      status,
    }

    const useGetReportsResponse = await axios.post(
      'http://144.76.118.243:8080/api/v1/meldungen/add',
      bodyContent,
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      }
    )

    return useGetReportsResponse.data
  }
}

export default useAddReports