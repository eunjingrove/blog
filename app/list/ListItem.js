'use client'

import Link from "next/link"

export default function ListItem({ result }) {
    return (
        <div>
            {result.map((v, i) => (
                <div key={i} className="list-item">
                    {/* 제목을 클릭하면 해당 게시물의 상세 페이지로 이동 */}
                    <Link href={'/detail/' + v._id}>
                        <h4>{v.title}</h4>
                    </Link>
                    
                    {/* 수정 버튼 (연필 아이콘) - 해당 게시물의 수정 페이지로 이동 */}
                    <Link href={'/edit/' + v._id}>✏️</Link>

                    {/* 삭제 버튼 (휴지통 아이콘) - 클릭 시 게시물을 삭제하는 요청을 보냄 */}
                    <span onClick={() => {
                        fetch('/api/post/delete', { 
                            method: 'DELETE', 
                            body: v._id 
                        })
                        .then((r) => {
                            if (r.status == 200) {
                                return r.json();
                            } else {
                                // 서버 에러 발생 시 처리할 코드
                                console.error("서버 오류로 인해 삭제 실패");
                            }
                        })
                        .then((result) => {
                            // 삭제 성공 시 실행할 코드 (예: UI에서 해당 아이템 제거)
                            console.log("삭제 성공:", result);
                        })
                        .catch((error) => {
                            // 네트워크 오류 또는 기타 문제 발생 시 처리할 코드
                            console.error("삭제 요청 중 오류 발생:", error);
                        });
                    }}>🗑️</span>

                    {/* 게시물 내용 표시 */}
                    <p>{v.content}</p>
                </div>
            ))}
        </div>
    );
}
