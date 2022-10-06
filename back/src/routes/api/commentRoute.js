import { Router } from "express";
import asyncHandler from "../../lib/util/asyncHandler";

const commentRoute = Router();

commentRoute.get(
    "/comments/:postId",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        res.send(`${postId}의 댓글 목록`);
    })
);

commentRoute.post(
    "/comment/:postId/:user_name",
    asyncHandler(async (req, res) => {
        const { postId } = req.params;
        const { user_name } = req.params;
        res.send(`${postId}게시글에 ${user_name}님 댓글 등록`);
    })
);

commentRoute.delete(
    "/comment/delete/:commentId",
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;
        res.send(`${commentId}삭제!`);
    })
);

commentRoute.put(
    "/comment/update/:commentId",
    asyncHandler(async (req, res) => {
        const { commentId } = req.params;

        res.send(`${commentId}수정!`);
    })
);

export default commentRoute;
