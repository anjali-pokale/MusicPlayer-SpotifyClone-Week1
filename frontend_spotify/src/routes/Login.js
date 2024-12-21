import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import {Link} from 'react-router-dom';

const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150" />
            </div>

            <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
                {/* Email and Password */}
                <div className="font-bold mb-6">
                    To continue, log in to Spotify.
                </div>

                <div className="w-full mb-6">
                    <TextInput
                        label="Email address or username"
                        placeholder="Email address or username"
                        className="my-6"
                    />
                </div>

                <div className="w-full mb-6">
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        className="w-full"
                    />
                </div>

                <div className="w-full flex items-center justify-end mt-8">
                    <button className="bg-green-400 font-semibold p-3 px-10 rounded-full">
                        LOG IN
                    </button>
                </div>

                <div className="w-full border border-solid border-gray-300 mt-6"></div>

                <div className="my-6 font-semibold text-lg">Don't have an account?</div>

                <div className="border border-gray-500 text-gray-500 font-bold w-full flex items-center justify-center py-4 rounded-full">
                    <Link to="/signup">SIGN UP FOR SPOTIFY </Link>
                    </div>

            </div>
        </div>
    );
};

export default LoginComponent;
