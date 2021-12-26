export default function Details() {
  return (
    <>
      <div className=" border border-blue-300 shadow rounded-md p-4 w-11/12 ">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-100 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-gray-100 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                <div className="h-2 bg-gray-100 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
