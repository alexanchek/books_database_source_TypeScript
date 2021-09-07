import React from "react"

interface InputFieldProps {
    label: string
    name: string
    helperText: string
    type: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>  void
}

export class InputField extends React.Component<InputFieldProps>  {
    renderHelperText() {
        const { helperText } = this.props;
        if (helperText !== 'none') {
            return (
                <span className="helper-text" data-error="wrong" data-success="right">{helperText}</span>
            )
        }
    }

    render() {
        const { type, label, name } = this.props;

        return (
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder={label} name={name} type={type} className="validate" onChange={this.props.onChange}/>
                    {this.renderHelperText()}
                </div>
            </div>
        )
    }
}