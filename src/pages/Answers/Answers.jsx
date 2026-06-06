import { useEffect, useState } from "react";
import {  getAnswersByUsersID } from "../../services/answers.service";
import { getTopicById } from "../../services/topic.service";
import { Link } from "react-router-dom";
import styles from "./Answers.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Answers() {
  const [dataAnswers, setDataAnswers] = useState([]); // Khởi tạo là mảng rỗng

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const answersByUserId = await getAnswersByUsersID();
        const topics = await getTopicById();
        console.log(topics);
        console.log(answersByUserId);

        if (answersByUserId && topics) {
          let result = [];
          for (let i = 0; i < answersByUserId.length; i++) {
            result.push({
              ...answersByUserId[i],
              ...topics.find((item) => item.id === answersByUserId[i].topicId),
            });
          }
          setDataAnswers(result.reverse());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>Danh sách bài đã luyện tập</h2>
      {dataAnswers.length > 0 ? (
        <table className={cx("table")}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên chủ đề</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {dataAnswers.map((item) => (
              <tr key={item.id} className={cx("row")}>
                <td className={cx("cell")}>{item.id}</td>
                <td className={cx("cell")}>{item.name}</td>
                <td className={cx("cell")}>
                  <Link to={`/result/${item.id}`} className={cx("link")}>
                    Xem chi tiết
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className={cx("noData")}>Không có dữ liệu để hiển thị.</p>
      )}
    </div>
  );
}

export default Answers;