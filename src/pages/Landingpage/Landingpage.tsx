import { FC } from 'react'
import { useCookies } from 'react-cookie'
import { useGetReports, useGetUser } from '../../api'
import PageLayout from '../../layouts'

export const Landingpage: FC = () => {
  const [cookies] = useCookies(['access_token'])

  const getReports = useGetReports()
  const getUser = useGetUser()

  console.log(getReports(cookies.access_token))
  console.log(getUser())

  return (
    <PageLayout showHeaderButtons={true}>
      <div className="px-64 gap-4 flex flex-col w-full h-full bg-backgroundGray justify-center items-center">
        <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full">Eigene Meldungen</div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => (
            <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full">Witchy Woman</div>
              <div className="justify-between w-2/5 flex flex-row">
                <div>The Eagles</div>
                <div>1972</div>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full">Meldungen für den Raumbetreuer</div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => (
            <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full">Witchy Woman</div>
              <div className="justify-between w-2/5 flex flex-row">
                <div>The Eagles</div>
                <div>1972</div>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-y-scroll my-4 h-128 px-8 w-full bg-white rounded-3xl">
          <div className="font-bold p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
            <div className="w-full">Alle Meldungen</div>
          </div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => (
            <div className="hover:bg-gray-300 p-8 gap-2 flex flex-row text-3xl text-stone-500 rounded-xl">
              <div className="w-full">Witchy Woman</div>
              <div className="justify-between w-2/5 flex flex-row">
                <div>The Eagles</div>
                <div>1972</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
