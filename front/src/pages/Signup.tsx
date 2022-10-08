import { ChangeEvent, useState, useRef, MouseEvent } from "react";
import {
    Container,
    Form,
    Input,
    OKButton,
    XButton,
    LogoContainer,
    Label,
    TopImage,
    SecondContainer,
    SecondContainer1,
    Select,
} from "../styles/pages/signup-style";
import { Logo } from "@styles/common";

// interface FormData {
//     email: string;
//     password: string;
//     passwordok: string;
//     passwordhint: string;
//     nickname: string;
//     gender?: any;
//     age: any;
//     local: string;
//     [key: string]: string;
// }
const Signup = () => {
    const nickname = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordok = useRef<HTMLInputElement>(null);
    const passwordhint = useRef<HTMLInputElement>(null);
    const local = useRef<HTMLSelectElement>(null);
    const age = useRef<HTMLSelectElement>(null);
    const gender = useRef<HTMLInputElement>(null);
    const [ValidationCheck, setValidationCheck] = useState(false);
    const [inputStatus, setInputStatus] = useState("");

    const handleClickRadioButton = (radioBtnName) => {
        setInputStatus(radioBtnName);
    };
    // const [formData, setFormData] = useState<FormData>({
    //     email: "",
    //     password: "",
    //     passwordok: "",
    //     passwordhint: "",
    //     nickname: "",
    //     gender: "",
    //     age: "",
    //     local: "",
    // });
    let formData = {
        email: "",
        password: "",
        passwordok: "",
        passwordhint: "",
        nickname: "",
        gender: "",
        age: "",
        local: "",
    };
    const validationTrue = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (
            email.current == null ||
            password.current == null ||
            passwordok.current == null ||
            passwordhint.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            local.current == null
        ) {
            return;
        }
        if (
            email.current?.value == "" ||
            password.current?.value == "" ||
            passwordok.current?.value == "" ||
            passwordhint.current?.value == "" ||
            nickname.current?.value == "" ||
            gender.current?.value == "" ||
            age.current?.value == "" ||
            local.current?.value == ""
        ) {
            return false;
        }
        setValidationCheck(true);
    };
    const onClickPrevent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };
    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (
            email.current == null ||
            password.current == null ||
            passwordok.current == null ||
            passwordhint.current == null ||
            nickname.current == null ||
            gender.current == null ||
            age.current == null ||
            local.current == null
        ) {
            return;
        }
        if (
            email.current?.value == "" ||
            password.current?.value == "" ||
            passwordok.current?.value == "" ||
            passwordhint.current?.value == "" ||
            nickname.current?.value == "" ||
            gender.current?.value == "" ||
            age.current?.value == "" ||
            local.current?.value == ""
        ) {
            setValidationCheck(false);
            return false;
        }
        formData = {
            email: email.current?.value,
            password: password.current?.value,
            passwordok: passwordok.current?.value,
            passwordhint: passwordhint.current?.value,
            nickname: nickname.current?.value,
            gender: gender.current?.value,
            age: age.current?.value,
            local: local.current?.value,
        };
        console.log("success");
    };

    const onChangeForm = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        // radioState({
        //     selectValue: e.target.value
        //   });
        // };
    };

    function selectnum() {
        var num = [];
        for (var i = 20; i < 99; i++) {
            num.push(<option value={i}>{i}세</option>);
        }
        return num;
    }
    return (
        <>
            <TopImage></TopImage>
            <Container>
                <div>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <SecondContainer>
                        <SecondContainer1>
                            <Form>
                                <Label>닉네임</Label>
                                <Input
                                    type="id"
                                    placeholder="닉네임을 입력하세요."
                                    name="nickname"
                                    ref={nickname}
                                />
                                <Label>이메일</Label>
                                <Input
                                    type="email"
                                    placeholder="이메일을 입력하세요."
                                    name="email"
                                    ref={email}
                                />
                                <Label>성별</Label>
                                <div>
                                    <span>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="남"
                                            checked={inputStatus === "남"}
                                            onClick={() => handleClickRadioButton("남")}
                                            ref={gender}
                                            // onChange={onChangeForm}
                                        ></input>
                                        <label style={{ marginRight: "40px" }}>남</label>
                                        <input
                                            name="gender"
                                            type="radio"
                                            value="여"
                                            checked={inputStatus === "여"}
                                            onClick={() => handleClickRadioButton("여")}
                                            // onChange={onChangeForm}
                                            ref={gender}
                                        ></input>
                                        여
                                    </span>
                                </div>
                                <Label>나이</Label>
                                <Select defaultValue="1" ref={age} name="age">
                                    {selectnum()}
                                </Select>
                                <Label>지역</Label>
                                <Select defaultValue="해당없음" name="local" ref={local}>
                                    <option value="해당없음">해당없음</option>
                                    <option value="서울">서울</option>
                                    <option value="경기도">경기도</option>
                                    <option value="강원도">강원도</option>
                                    <option value="충청도">충청도</option>
                                    <option value="경상도">경상도</option>
                                    <option value="전라도">전라도</option>
                                </Select>
                            </Form>
                        </SecondContainer1>
                        <SecondContainer1>
                            <Form>
                                <Label>비밀번호</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="password"
                                    ref={password}
                                />
                                <Label>비밀번호 확인</Label>
                                <Input
                                    type="password"
                                    placeholder="비밀번호를 입력하세요."
                                    name="passwordok"
                                    ref={passwordok}
                                />
                                <Label>비밀번호 힌트</Label>
                                <Input
                                    placeholder="힌트를 입력하세요."
                                    name="passwordhint"
                                    ref={passwordhint}
                                />
                                {ValidationCheck ? (
                                    <OKButton onClick={onClick} onMouseEnter={onClick}>
                                        회원 가입하기
                                    </OKButton>
                                ) : (
                                    <XButton onClick={onClickPrevent} onMouseEnter={validationTrue}>
                                        회원 가입하기
                                    </XButton>
                                )}
                            </Form>
                        </SecondContainer1>
                    </SecondContainer>
                </div>
            </Container>
        </>
    );
};

export default Signup;
