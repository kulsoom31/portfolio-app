import { useState } from "react";

function Contact() {

    const [inputs, setInputs] = useState({});
    
    const [success,setSuccess] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setSuccess("Thank you for contact us!");
        setInputs("");
      }

    return <>
    <div class="container mt-5">
        <div class="row mb-3">
            <div class="col-md-8 bg-light shadow p-5">
                <h2 className="mb-3">Have any query? Contact Us</h2>
                <form  onSubmit={handleSubmit}>
                    <label for="">Your Name*</label>
                    <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} class="form-control mb-3" id="" placeholder="Enter Your Name" />
                    <label for="">Email*</label>
                    <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} class="form-control mb-3" id="" placeholder="You Email" />
                    <label for="">Subject*</label>
                    <input type="text" name="subject" value={inputs.subject || ""} onChange={handleChange} class="form-control mb-3" id="" placeholder="Subject for contact" />
                    <label for="">Message</label>
                    <textarea name="message" id="message" value={inputs.message || ""} onChange={handleChange} class="form-control mb-3"  cols="30" rows="4" placeholder="Write your message here..."></textarea>
                    <button class="btn btn-success" type="submit">Submit</button>
                </form>
                <h4 className="text-success float-end">{success || ""}</h4>
            
                
               
            </div>
            
        </div>
        
    </div>
    </>
}

export default Contact;