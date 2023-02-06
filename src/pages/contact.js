import '../index.css';
// import './index.css';
// import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input';


// eslint-disable-next-line
//import {Header} from '../components/Header'
//mport {Herosection} from '../components/Herosection'
//import {Heading} from '../components/heading'
//import {Subheading} from '../components/Subheadings'
//import {Card} from '../components/card'
//import serviceIconOne from "../components/assests/images/img two/Vector.png";
//import serviceIconTwo from "../components/assests/images/img two/software.png";
//import serviceIconThree from "../components/assests/images/img two/consult.png";
// eslint-disable-next-line
import {Routes, Route} from 'react-router-dom'


export const Contact = () => {

 

  return (

    <>

      {/*hero section start */}

       <section>
    <div className='lg:px-16 px-6 h-[auto] py-16  rounded bg-service-section bg-no-repeat bg-origin-border bg-center bg-cover flex justify-center text-left flex-col'>
  <h3 className="text-primary mb-5 text-2xl lg:text-3xl lg:mb-10 font-bold">Get in touch</h3>
    <div className="lg:flex lg:justify-between ">
      
      <div>
      <div className="mb-6 text-lg">
        <ol><li>+234567789940</li> <li>example@gmail.com</li> </ol>
      </div>
    
      
      <div className="mb-10 lg:mb-0 text-lg">
        <p>+234567789940 <br /> example@gmail.com </p>
      </div>
      </div>

      <div className="bg-white shadow-md px-6 lg:px-10 rounded py-10 lg:w-[45rem]">
      <h3 className="font-bold mb-8 lg:text-lg">Fill out the form and we'll be in touch as soon as possible.</h3>
      <form className="mr-[auto] ml-[auto] text-gray-600 lg:flex lg:flex-wrap lg:justify-between">

      <input  type="text"  placeholder="First Name" className="w-full outline-primary lg:w-[19rem] mb-3 py-2 rounded bg-gray-100 placeholder-gray-500 px-3 " />
      <input  type="email" placeholder="Email Address" className="w-full lg:w-[19rem] outline-primary mb-3 py-2 rounded bg-gray-100 placeholder-gray-500 px-3 " />
      <input  type="number" placeholder="Number" className="w-full lg:w-[19rem] py-2 mb-3 rounded outline-primary bg-gray-100 placeholder-gray-500 px-3 " />
      <select className="w-full py-2 rounded bg-gray-100 lg:w-[19rem] text-gray-500 mb-3 placeholder-gray-500 outline-primary px-3 ">
        <option>Project Type</option>
        </select>

        <select className="w-full py-2 lg:w-[19rem] outline-primary rounded bg-gray-100 text-gray-500 px-3 mb-3 ">
        <option >Budget</option>
        </select>

           <select className="w-full py-2 lg:w-[19rem] outline-primary rounded text-gray-500 bg-gray-100 mb-3 placeholder-gray-500 px-3 ">
          <option>Country</option>
        </select>

        <textarea  placeholder="Your Message" className="w-full outline-primary py-2 h-[9rem] lg:w-[100%] rounded bg-gray-100 placeholder-gray-500 mb-3 px-3 " >

        </textarea>

      
      </form>

 <div className="flex items-center my-4">
    <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-blue-100 rounded ring-primary accent-primary ring-2 " />
    <label for="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 ">I agree with the terms and conditions.</label>
  </div>

      <input type="submit"  value="submit" className="bg-heading cursor-pointer text-white rounded-[3rem] px-9 mt-2 py-2"/>
      </div>
    </div>
    </div>
    </section>

    <section>
    <iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Unik%20Creative%20Zone%20Calabar+(map)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="450" frameborder="0"></iframe>

</section>

    </>
  );
};
