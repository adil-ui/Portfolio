import './Contact.css'

const Contact = () =>{
    return(
        <section className="contact" id="contact">
            <h2 className="section_title">Contact</h2>
            <div className="white_line"></div>
            <div class="col-xxl-5 col-xl-6 col-lg-9 col-sm-11 col-11 mx-auto">
                <form class="row g-3 ">
                    <div class="form-floating col-md-6" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-out-cubic">
                        <input type="text" className="form-control" id="floatingName" placeholder="Your Name" />
                        <label for="floatingName" className='text-light text-opacity-75'>Your Name</label>
                    </div>
                    <div class="form-floating col-md-6" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-out-cubic">
                        <input type="email" className="form-control" id="floatingEmail"  placeholder="Your Email" />
                        <label for="floatingEmail" className='text-light text-opacity-75'>Your Email</label>
                    </div>
                    <div class="form-floating col-12" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-out-cubic">
                        <input type="text" className="form-control" id="floatinSubject"  placeholder="Subject" />
                        <label for="floatinSubject" className='text-light text-opacity-75'>Subject</label>
                    </div>
                    <div class="form-floating col-12" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-out-cubic">
                        <textarea rows="5"  className="form-control" id="floatingMessage"  placeholder="Message"></textarea>
                        <label for="floatingMessage" className='text-light text-opacity-75'>Message</label>
                    </div>
                    <div class="text-center mt-4" data-aos="fade-up" data-aos-duration="1000"  data-aos-easing="ease-out-cubic">
                        <button type="submit" className="btn text-light fw-semibold">Envoyer</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Contact