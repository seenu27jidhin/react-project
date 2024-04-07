
import Logo from '@/assets/img/Logo1.jpg'
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">

        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo}/>
                <p className="my-5">
                Lorem lpsum is simple dummy text of the printing 
                 and typesetting industry.Lorem ipsum has been the 
                 industry standers dummy text ever since the 1500s,
                 when an unknown printer took a gallery of the type 
                 and scrambled it to make a type specimen book.
                </p>
                <p>
                    @fdkfmdkm.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">addsfs gdhhu</p>
                <p className="my-5">uh dgucgfgu ereuhr ruehd</p>
                <p>uh dgucgf hdsfh</p>
       
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5"> sfk fnj</p>
                <p>(7565)6564545</p>
            </div>

        </div>
      
    </footer>
  )
}



export default Footer
