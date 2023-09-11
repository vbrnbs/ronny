import Hero from "./Hero";
import * as Scrollytelling from "@bsmnt/scrollytelling";
import "./style.css";

export default function BG() {
  return (
    <main>
      <Scrollytelling.Root>
        <Scrollytelling.Pin
          childHeight={"0vh"}
          pinSpacerHeight={"100vh"}
          top={0}
        >
          <section className="section">
            {/* <div className="wrapper"> */}
            <Hero />
            {/* </div> */}
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Pin
          childHeight={"0vh"}
          pinSpacerHeight={"100vh"}
          top={0}
        >
          <section className="section orange">
            <div className="wrapper">
              At [Car Service Name], we offer a wide range of general mechanic
              services to keep your car running smoothly. We can handle
              everything from oil changes and tire rotations to brake repairs
              and engine diagnostics. We use only high-quality parts and
              materials, and our technicians are certified and experienced. We
              also offer a 12-month/12,000-mile warranty on all our work. In
              addition to our general mechanic services, we also offer a variety
              of other services, including: Car detailing Window tinting Sound
              system installation And more!
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Pin
          childHeight={"0vh"}
          pinSpacerHeight={"100vh"}
          top={0}
        >
          <section className="section">
            <div className="wrapper">
              Homepage: Welcome to [Your Company Name] - Your Trusted Car
              Mechanics At [Your Company Name], we're more than just a car
              service; we're your partner in keeping your vehicle running
              smoothly. Our team of experienced mechanics is committed to
              delivering top-quality automotive solutions to ensure your peace
              of mind on the road. Our Services: Routine Maintenance Engine
              Diagnostics Brake Repairs Transmission Services Suspension and
              Steering Electrical Systems And Much More! Why Choose Us:
              Experienced Mechanics: Our certified technicians bring years of
              expertise to every job. State-of-the-Art Equipment: We use
              advanced diagnostic tools for precise results. Quality Parts: We
              use only genuine and high-quality OEM parts. Transparent Pricing:
              No hidden fees; you'll know what to expect. Outstanding Customer
              Service: We're here to answer your questions and address your
              concerns. Your Vehicle, Our Expertise - Trust [Your Company Name]
              for All Your Car Care Needs. Services Page: Our Services At [Your
              Company Name], we offer a wide range of comprehensive automotive
              services to keep your vehicle in top condition. Our skilled
              mechanics are equipped to handle everything from routine
              maintenance to complex repairs. Our Services Include: Routine
              Maintenance: Stay on top of regular oil changes, tire rotations,
              and more to extend the life of your vehicle. Engine Diagnostics:
              Our advanced diagnostic tools help us pinpoint issues and get you
              back on the road with confidence. Brake Repairs: Ensure your
              safety with expert brake inspections, maintenance, and
              replacements. Transmission Services: Trust our team to handle
              transmission repairs and fluid changes efficiently. Suspension and
              Steering: We'll address any issues affecting your vehicle's
              handling and ride comfort. Electrical Systems: From battery checks
              to electrical diagnostics, we've got you covered. Schedule an
              appointment today to experience our exceptional service and
              expertise. About Us Page: About [Your Company Name] At [Your
              Company Name], we're passionate about cars and dedicated to
              providing the best possible service to our customers. With [X
              years] of experience in the industry, we've earned a reputation
              for excellence. Why Choose [Your Company Name]? Experience: Our
              skilled team has a deep understanding of automotive systems.
              Customer-Centric: Your satisfaction is our priority, and we're
              committed to meeting your needs. Community-Oriented: We're proud
              to serve our local community and contribute to safer roads. Visit
              [Your Company Name] today and experience the difference for
              yourself. Contact Page: Contact Us Ready to schedule an
              appointment or have questions about our services? We're here to
              help. Contact Information: Address: [Your Address] Phone: [Your
              Phone Number] Email: [Your Email Address] Business Hours:
              Monday-Friday: [Opening Hours] Saturday: [Opening Hours] Sunday:
              Closed Get in touch with us, and let's keep your vehicle running
              smoothly.
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>

      <Scrollytelling.Root>
        <Scrollytelling.Pin
          childHeight={"0vh"}
          pinSpacerHeight={"100vh"}
          top={0}
        >
          <section className="section orange">
            <div className="wrapper">
              <h1>Layered pinning 4</h1>
            </div>
          </section>
        </Scrollytelling.Pin>
      </Scrollytelling.Root>
    </main>
  );
}
