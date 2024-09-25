import React, { useState } from 'react'
import Brebcumb from '../component/Layer/Brebcumb'
import Container from '../component/Layer/Container'
// import Input from '../component/Layer/Input'
import { ImTelegram } from 'react-icons/im'
import Input from '../component/Layer/Input'

const Signup = () => {
    let Division = ["Barishal", "Chattogram", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"]


    const District = [
        "Bandarban",
        "Barguna",
        "Barisal",
        "B Brahmanbaria",
        "Brahmanbaria",
        "Chandpur",
        "Chandpur",
        "Chattogram",
        "Chuadanga",
        "Cox's Bazar",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Halda",
        "Jamalpur",
        "Jashore",
        "Jatiyo",
        "Jhalokati",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
    ];

    let [fName, setFName ] = useState('')
    let [fNameerr, setFNameErr ] = useState('')

    let [lName, setlName ] = useState('')
    let [lNameerr, setlNameErr ] = useState('')

    let [password, setPassword ] = useState('')
    let [passwordErr, setPasswordErr ] = useState('')


    
    let [email, setEmail ] = useState('')
    let [emailErr, setEmailErr ] = useState('')


    let [telephone, setTelephone ] = useState('')
    let [telephoneErr, setTelephoneErr ] = useState('')

    
    let [address, setAddress ] = useState('')
    let [AddressErr, setAddressErr ] = useState('')

    let [city , setCity ] = useState('')
    let [cityErr, setCityErr ] = useState('')

    let [code , setCode ] = useState('')
    let [codeErr, setCodeErr ] = useState('')





    let manageFname = (element)=>{
        setFName(element.target.value);
        setFNameErr('')
    }

    let manageLastName = (element)=>{
        setlName(element.target.value);
        setlNameErr('')
    }

    let managePassword = (element)=>{
        setPassword(element.target.value);
        setPasswordErr('')
    }
    let manageEmail = (element)=>{
        setEmail(element.target.value);
        setEmailErr('')
    }
    let manageTelephone = (element)=>{
        setTelephone(element.target.value);
        setTelephoneErr('')
    }
    let manageAddress = (element)=>{
        setAddress(element.target.value);
        setAddressErr('')
    }
    let manageCity = (element)=>{
        setCity(element.target.value);
        setCityErr('')
    }
    let manageCode = (element)=>{
        setCode(element.target.value);
        setCodeErr('')
    }


    let manageSubmit = ()=>{
        if(!fName){
            setFNameErr('First name is requerd')
        }
        if(!lName){
            setlNameErr('Last name is requerd')
        }
        if(!password){
            setPasswordErr('Password is requerd')
        }
        if(!email){
            setEmailErr('Email is requerd')
        }
        if(!telephone){
            setTelephoneErr('Telephone is requerd')
        }
        if(!address){
            setAddressErr('Address is requerd')
        }
        if(!city){
            setCityErr('City is requerd')
        }
        if(!code){
            setCodeErr('Code is requerd')
        }
    }


    return (
        <div className='my-10 font-DM'>
            <Container>
                <div className="pb-10 border-b">
                    <Brebcumb />
                    <p className='mt-20 max-w-[644px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, velit esse. Temporibus quis amet cupiditate ut repudiandae, blanditiis debitis ex!
                    </p>
                </div>

                <div className=" mt-10 border-b pb-10">
                    <h2 className='text-3xl font-bold mb-10'>
                        Your Personal Details
                    </h2>
                    <div className="flex flex-wrap gap-x-10 gap-y-6">

                        <Input LAbelText="First Name *" placeholder="First Name" type="text" id="FirstName" className="w-[507px] border-b" value10={fName} onChange={manageFname}>
                            <p className='absolute top-full left-0 text-red-400 text-xs'>{fNameerr}</p>
                        </Input>


                        <Input value10={lName} onChange={manageLastName} LAbelText="Last Name" placeholder="Last Name" type="text" id="La~stName" className="w-[507px] border-b">
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{lNameerr}</p>
                        </Input>


                        <Input value10={email} onChange={manageEmail} LAbelText="Email address" placeholder="company@domain.com" type="text" id="Email address" className="w-[507px] border-b">
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{emailErr}</p>
                        </Input>


                        <Input value10={telephone} onChange={manageTelephone} LAbelText="Telephone" placeholder="Your phone number" type="number" id="Telephone" className="w-[507px] border-b">
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{telephoneErr}</p>
                        </Input>
                    </div>
                </div>
                {/* ====================== */}
                <div className=" mt-10 border-b pb-10">
                    <h2 className='text-3xl font-bold mb-10'>
                        New Customer
                    </h2>
                    <div className="flex flex-wrap gap-x-10 gap-y-6">
                        <Input value10={address} onChange={manageAddress} LAbelText="Address 1" placeholder="Address 1" type="text" id="Address 1" className="w-[507px] border-b">
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{AddressErr}</p>

                        </Input>


                        <Input value10={address} onChange={manageAddress} LAbelText="Address 2" placeholder="Address 2" type="text" id="Address 2" className="w-[507px] border-b" >
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{AddressErr}</p>
                        </Input>



                        <Input value10={city} onChange={manageCity} LAbelText="City" placeholder="City" type="text" id="City" className="w-[507px] border-b" >
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{cityErr}</p>
                        </Input>






                        <Input value10={code} onChange={manageCode}  LAbelText="Post Code" placeholder="Post Code" type="number" id="Post Code" className="w-[507px] border-b">
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{codeErr}</p>
                        </Input>








                        <div className="border-b w-[507px]">
                            <label htmlFor="Division" className='font-bold'>Division</label>
                            <select className='block w-full pb-4 mt-4 ' id="Division">
                                <option value="Please select" > Please select</option>
                                {
                                    Division.map((item, index) => (
                                        <option value={item} key={index}> {item}</option>
                                    ))
                                }
                            </select>
                        </div>


                        <div className="border-b w-[507px]">
                            <label htmlFor="District" className='font-bold'>District</label>
                            <select className='block w-full pb-4 mt-4 ' id="District">
                                <option value="Please select" > Please select</option>
                                {
                                    District.map((item, index) => (
                                        <option value={item} key={index}> {item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
                {/* ====================== */}
                <div className=" mt-10 border-b pb-10">
                    <h2 className='text-3xl font-bold mb-10'>
                        Your Password
                    </h2>
                    <div className="flex flex-wrap gap-x-10 gap-y-6">
                        <Input value10={password} onChange={managePassword} LAbelText="Password" placeholder="Password" type="text" id="Password" className="w-[507px] border-b">
                        <p className='absolute top-full left-0 text-red-400 text-xs'>{passwordErr}</p>
                        </Input>
                        <Input LAbelText="Repeat Password" placeholder="Repeat Password" type="text" id="Repeat Password" className="w-[507px] border-b" />
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <input className='relative appearance-none w-2.5 h-2.5 bg-white border border-gray-600 checked:border-0 checked:bg-gray-600 after:content-[""] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 checked:after:bg-gray-600 checked:after:border checked:after:!border-white' type="checkbox" /> <p>I have read and agree to the Privacy Policy</p>
                </div>

                <div className='flex items-center gap-5'>
                    <p>Subscribe Newsletter</p>
                    <div className='flex items-center gap-3'>
                        <input className='relative appearance-none w-2.5 h-2.5 bg-white border border-gray-600 checked:border-0 checked:bg-gray-600 after:content-[""] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 checked:after:bg-gray-600 checked:after:border checked:after:!border-white' name='Subscribe' type="radio" /> <p>Yes</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <input className='relative appearance-none w-2.5 h-2.5 bg-white border border-gray-600 checked:border-0 checked:bg-gray-600 after:content-[""] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 checked:after:bg-gray-600 checked:after:border checked:after:!border-white' name='Subscribe' type="radio" /> <p>No</p>
                    </div>
                </div>
                <button onClick={manageSubmit} className='font-bold px-20 py-4 mt-3 border-2 border-black'>
            Sign-up
            </button>

            </Container>
        </div>
    )
}

export default Signup