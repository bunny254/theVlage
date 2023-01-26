
import PropTypes from 'prop-types'

const NewListingQs = (props) => {
  return (
    <>
      <section className="hidden md:flex text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-row md:justify-between flex-col items-center">
          <div className="lg:max-w-lg mt-15 py-24 lg:w-full h-full fixed bottom-0 md:w-1/2 w-5/6 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-800  mb-10 md:mb-0">
            <h1 className="text-[2.7rem] text-gray-200 text-left pl-10  font-semibold mt-2 mb-6">
              {props.title}
            </h1>
            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          </div>
          <div className="lg:pl-24 md:mt-16 md:ml-[28rem] flex flex-col md:text-left text-center">
            {props.children}
          </div>
        </div>
      </section>


      <section className="md:hidden flex-grow pt-14 px-6">



        <h1 className="text-[1.1rem] text-gray-900 text-left pl-12 font-semibold pt-5">
          {props.title}
        </h1>

        <div className="p-2 w-[22rem] sm:w-[23rem] md:w-[25rem] mx-auto flex flex-col " >
          {props.children}


        </div>

      </section>


    </>
  )
}

NewListingQs.propTypes = {
  title: PropTypes.string

}

export default NewListingQs
