import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link} from 'react-router-dom';


const SignupComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>

            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                {/* Email and Password */}
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>

                <div className="w-full mb-6">
                    <TextInput
                        label="Email address"
                        placeholder="Enter your email "
                        className="my-6"
                    />
                </div>

                <div className="w-full mb-6">
                    <TextInput
                        label="Confirm Email Address"
                        placeholder="Enter your email again"
                        className="mb-6"
                    />
                </div>

                <div className="w-full mb-6">
                    <PasswordInput
                        label="Create Password"
                        placeholder="Enter a strong password here"
                        className="w-full"
                    />
                </div>

                <div className="w-full mb-6">
                    <TextInput
                        label="What should we call you?"
                        placeholder="Enter a profile name"
                        className="my-6"
                    />
                </div>

                <div className="w-full flex items-center justify-center mt-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
                        Sign Up
                    </button>
                </div>

                <div className="w-full border border-solid border-gray-300 mt-6"></div>

                <div className="my-6 font-semibold text-lg">Already have an account?</div>

                <div className="border border-gray-500 text-gray-500 font-bold w-full flex items-center justify-center py-4 rounded-full">
                <Link to="/">LOG IN INSTEAD</Link>
                </div>

            </div>
        </div>
    );
};

export default SignupComponent;
