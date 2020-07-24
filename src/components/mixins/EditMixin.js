import React, {useState} from react;

import axios from '../axios';

const EditMixin = () => {
    const [input, setInput] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = {mixin: input};
       await axios.post(`/mixins/${id}`, result);

    }
    return (
        <div>
            <h1>Edit Me baby!</h1>
            <br /> 
            <div>
                <form className="ui form" onSubmit={(e) => setInput(e.target.value)}>
                  <input input={input} />
                  <button className="ui button primary">Submit</button>
                  <button className="ui button negative">Exit</button>
                </form>
            </div>
        </div>
    );
};

export default EditMixin;