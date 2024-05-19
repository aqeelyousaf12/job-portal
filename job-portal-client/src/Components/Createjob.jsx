import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
const CreateJob = () => {

    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.skills = selectedOption;
        console.log(data);
    }

    const options = [
        { value: "Javascript", label: "Javascript" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "React", label: "React" },
        { value: "Node", label: "Node" },
        { value: "MongoDb", label: "MongoDb" },
        { value: "Redux", label: "Redux" }

    ]
    return (

        <div className="max-w-screen-2x1 container mx-auto x1:px-24 px-4">

            {/* form */}

            <div className="bg-[#FAFAFA] py-10px-4 1g:px-16">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* first row */}
                    <div className="create-job-flex">

                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Job Title</label>

                            <input type="text" defaultValue={"Web Developer"}

                                {...register("jobTitle")} className="create-job-input" />

                        </div>
                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Company Name</label>

                            <input type="text" placeholder="Ex: Microsoft"

                                {...register("companyName")} className="create-job-input" />

                        </div>

                    </div>

                    {/* second  row */}
                    <div className="create-job-flex">

                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Minimum Salary </label>

                            <input type="text" defaultValue="$20k"

                                {...register("minPrice")} className="create-job-input" />

                        </div>
                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Maximum Salary</label>

                            <input type="text" placeholder="$120k"

                                {...register("maxPrice")} className="create-job-input" />

                        </div>

                    </div>
                    {/* Third row */}
                    <div className="create-job-flex">

                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Salary Type</label>

                            <select {...register("salaryType")} className="create-job-input" >
                                <option value="">Chose your salary</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>

                        </div>
                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Job Location</label>

                            <input type="text" placeholder="Ex: New Yourk"

                                {...register("jobLocation")} className="create-job-input" />

                        </div>

                    </div>

                    {/* fourth  row */}
                    <div className="create-job-flex">


                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Job Posting Date</label>

                            <input type="date" placeholder="Ex: 2024-5-5"

                                {...register("postingDate")} className="create-job-input" />

                        </div>
                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Experience Level</label>

                            <select {...register("experienceLevel")} className="create-job-input" >
                                <option value="">select your Experience Level</option>
                                <option value="NoExperience">NoExperience</option>
                                <option value="Internship">Internship</option>
                                <option value="Work Remotely">Work Remotely</option>
                            </select>

                        </div>
                    </div>
                    {/* fifth row */}

                    <div>

                        <label className="block mb-2 text-lg">Required Skills Sets:</label>
                        <CreatableSelect
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                            className='create-job-input py-4' />
                    </div>

                    {/* sixth row */}
                    <div className="create-job-flex">


                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Company Logo</label>

                            <input type="url" placeholder="Paste your company logo URL:https://weshare.com/img1"

                                {...register("companyLogo")} className="create-job-input" />

                        </div>
                        <div className="1g:w-1/2 w-full">

                            <label className="block mb-2 text-lg">Employment Type</label>

                            <select {...register("employmentType")} className="create-job-input" >
                                <option value="">select your job type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temorary">Temorary</option>
                            </select>

                        </div>
                    </div>

                    {/* seventh row */}
                    <div className="w-full">
                        <label className="block mb-2 text-lg">Job Description:</label>
                        <textarea className='w-full p1-3 py-1.5 focus:outline-none placeholder:text-gray-700'
                            rows={6}
                            defaultValue={"Mollit in laborum tempor Loren incididunt irure. Aute eu ex ad sunt. Pariatur sint.culpa do incididunt eiusmod eiusmod culpa. laborum tempor Lorem incididunt. "}
                            placeholder='Job Description'
                            {...register("descripton")} />

                    </div>
                    {/* last row */}

                    <div className="w-full">
                        <label className="block mb-2 text-lg">Job Posted By:</label>
                        <input type="email"
                        placeholder='Your email'

                            {...register("postedBy")} className="create-job-input" />
                    </div>
                    <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer" />

                </form>

            </div>

        </div >

    );
}

export default CreateJob;