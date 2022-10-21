import { useRef, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import API from "@/api/.";
import { Logo } from "@/styles/common";
import { FindInfoWrap, Form, Label, IDInput, SubmitButton } from "@/styles/pages/auth-style";
import { Main } from "@/components/common/Main";
import { ROUTES } from "@/routes";
import sendToast from "@/lib/sendToast";

const Auth = () => {
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (passwordRef.current === null) {
            return;
        }

        API.post<{ id: string }>(["user", "auth", "password"], {
            password: passwordRef.current.value,
        }).then((res: any) => {
            if (res.status !== 200) {
                return;
            }

            sendToast("인증에 성공했습니다.", "success");

            // navigate(ROUTES.FindResult.path, {
            //     state: { labelName: "아이디", result: res.data.id },
            // });
        });
    };

    return (
        <Main>
            <FindInfoWrap>
                <Logo />
                <Form>
                    <Label>비밀번호</Label>
                    <IDInput placeholder="비밀번호를 입력해주세요." ref={passwordRef} />
                    <SubmitButton onClick={onClick}>인증</SubmitButton>
                </Form>
            </FindInfoWrap>
        </Main>
    );
};

export default Auth;
