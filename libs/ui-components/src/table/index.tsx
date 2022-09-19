/**
 * Table - Index
 */

export const Table = ({ content }: { content: any[] }) => {
  const head = Object.keys(content[0])
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-800">
                <tr>
                  <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                    #
                  </th>
                  {head.map((item, index) => (
                    <th key={index} scope="col" className="text-sm font-medium text-white px-6 py-4">
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {content.map((item, index) => {
                  // Object.entries(item).map((entry) => console.log('entry', entry[0]))
                  return (
                    <tr key={item['id']} className={index % 2 === 0 ? 'bg-white border-b' : 'bg-gray-100 border-b'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>

                      {Object.values(item).map((value: any) => {
                        return <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{value}</td>
                      })}
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
