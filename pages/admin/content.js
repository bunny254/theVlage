const Content = (props) => (
  <div className="flex flex-col flex-wrap sm:flex-row">
    <div className="w-full md:w-4/12 pr-2 mb-6">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-4 bg-purple-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              height="40"
              viewBox="0 0 20 20"
              className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>

          </span>
          <p className="text-md text-black dark:text-white ml-2">
            Users
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            {Object.keys(props.tents).length}

            {/* <span className="text-sm">$</span> */}
          </p>
          {/* <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>5.5%</span>
            <span className="text-gray-400">vs last month</span>
          </div> */}
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/12 pr-2 mb-6">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-4 bg-purple-200">
            <svg
              width="40"
              fill="currentColor"
              height="40"
              className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
            </svg>

          </span>
          <p className="text-md text-black dark:text-white ml-2">Landlords</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            {Object.keys(props.hosts).length}
            {/* <span className="text-sm">$</span> */}
          </p>
          {/* <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>0.3%</span>
            <span className="text-gray-400">vs last month</span>
          </div> */}
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/12">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-4 bg-purple-200">
            <svg
              width="40"
              fill="currentColor"
              height="40"
              className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>

          </span>
          <p className="text-md text-black dark:text-white md:ml-4">Listings</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            {props.listings.total}
            {/* <span className="text-sm">$</span> */}
          </p>
          {/* <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>7%</span>
            <span className="text-gray-400">vs last month</span>
          </div> */}
        </div>
      </div>
    </div>


  </div>
);

export default Content;
export async function getServerSideProps(context) {
  const { req, res } = context
  const { cookies } = req
  const landlordresults = await axios.get(`https://backend.thevlage.com/api/admin/landlords`,
    {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })
    .then(
      response => {
        return response.data
      }
    )
    .catch(err => console.log(err));
  const clientresults = await axios.get(`https://backend.thevlage.com/api/admin/clients`,
    {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })
    .then(
      response => {
        return response.data
      }
    )
    .catch(err => console.log(err));
  const listingresults = await axios.get(`https://backend.thevlage.com/api/properties`,
    {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })
    .then(
      response => {
        console.log(response.data.meta);
        return response.data.meta
      }
    )
    .catch(err => console.log(err));
  return {
    props: {
      clientresults, landlordresults, listingresults
    }
  }
}