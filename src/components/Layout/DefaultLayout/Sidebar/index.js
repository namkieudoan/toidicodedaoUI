import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import Wrapper from "./Wrapper";

const cx=classNames.bind(styles)

function Sidebar() {
    return <div className ={cx("wrapper")}>
        <div className={cx("search")}>
            <input type={"search"} placeholder={"Search..."} ></input>
        </div>

        <Wrapper>
            <div className={cx("youtube")}>
                <h4>KÊNH YOUTUBE TÔI ĐI CODE DẠO</h4>
                <div className={cx("container")}>
                    <Link to="" >
                        <img src="https://toidicodedao.files.wordpress.com/2017/12/youtube-channel-toidicodedao.jpg" style={{width:"90%"}} alt="youtube-channel-toidicodedao" />
                    </Link>
                    <p>Kênh Youtube chia sẻ về ngành lập trình dưới dạng <strong>vlog 3-4 phút</strong> rất ngắn gọn và bổ ích.</p>
                    <p>Các bạn nhớ <strong>ghé thăm và subscribe</strong> nha!</p>	
                </div>

            </div>
        </Wrapper> 

        <Wrapper>
            <div className={cx("book")} >
                <h4>SÁCH DO TÔI VIẾT</h4>
                <div className={cx("container")}>
                    <Link to="" className={cx("book-content")} >
                        <span><b>[Free Ebooks]</b> Bảo mật nhập môn - Bảo mật cơ bản cho developer</span>
                        <img src="https://toidicodedao.files.wordpress.com/2016/12/3dbook.png" style={{width:"40%"}} alt="toidicodedao" />
                    </Link>
                    <Link to="" className={cx("book-content")} >
                        <span><b>[Free Ebooks]</b>  Nhập môn lập trình không code</span>
                        <img src="https://toidicodedao.files.wordpress.com/2017/08/cover1.png" style={{width:"40%"}} alt="toidicodedao" />
                    </Link>
                </div>
            </div>
        </Wrapper>

        <Wrapper>
            <div className={cx("post-pages")}>
                <h4>TOP POSTS & PAGES</h4>
                <div className={cx("container")}>
                    <ul className={cx("post-list")}>
                        <li>
                            <Link to="" >
                                <span>SOLID là gì - Áp dụng các nguyên lý SOLID để trở thành lập trình viên code "cứng"</span>
                                <img width="40" height="40" src="https://toidicodedao.files.wordpress.com/2015/02/keepcalm.png?resize=40%2C40" alt="SOLID là gì - Áp dụng các nguyên lý SOLID để trở thành lập trình viên code cứng" />
                            </Link>
                        </li>
                        <li>
                            <Link to="" >
                                <span>Hướng dẫn setup Visual Studio Code - Những extension xịn xò mà dev nào cũng nên dùng</span>
                                <img width="40" height="40" src="https://toidicodedao.files.wordpress.com/2020/07/a4nibn44fsehd.jpg?w=1200&resize=40%2C40" alt="SOLID là gì - Áp dụng các nguyên lý SOLID để trở thành lập trình viên code cứng" />
                            </Link>
                        </li>
                        <li>
                            <Link to="" >
                                <span>Dependency Injection và Inversion of Control - Phần 1: Định nghĩa</span>
                                <img width="40" height="40" src="https://toidicodedao.files.wordpress.com/2015/09/ioc-and-mapper-in-c-1-638.jpg?resize=40%2C40" alt="SOLID là gì - Áp dụng các nguyên lý SOLID để trở thành lập trình viên code cứng" />
                            </Link>
                        </li>
                        <li>
                            <Link to="" >
                                <span>5 trang web cực hay để luyện thuật toán, học lập trình</span>
                                <img width="40" height="40" src="https://toidicodedao.files.wordpress.com/2019/09/dfwvljwxsamhmxw.jpeg?resize=40%2C40" alt="SOLID là gì - Áp dụng các nguyên lý SOLID để trở thành lập trình viên code cứng" />
                            </Link>
                        </li>
                        <li>
                            <Link to="" >
                                <span>Sự khác biệt giữa server-side rendering và client-side rendering</span>
                                <img width="40" height="40" src="https://toidicodedao.files.wordpress.com/2018/08/ssr-vs-csr.png?resize=40%2C40" alt="SOLID là gì - Áp dụng các nguyên lý SOLID để trở thành lập trình viên code cứng" />
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
        <Wrapper>
            <div className={cx("about")}>
                <h4>ABOUT ME</h4>
                <div className={cx("container")}>
                <img src="https://toidicodedao.files.wordpress.com/2016/08/av.jpg"  alt="channel-toidicodedao" />
                    
                        <span>Mình là Phạm Huy Hoàng, một developer.</span>
                        <span>Thuở còn là sinh viên, mình từng có những thắc mắc, trăn trở về technical, về con đường nghề nghiệp, nhưng không có ai giải đáp.</span>
                        <span>Blog này là nơi mình chia sẻ những kiến thức, kinh nghiệm mà mình đạt được trong quá trình làm việc và trải nghiệm.</span>
                        <span>Mong rằng nó sẽ giải đáp phần nào những khúc mắc, trăn trở cho những bạn sinh viên như mình ngày xưa.</span>
                        <Link to="">Đọc thêm về tôi và blog này!</Link>
                    
                </div>

            </div>
        </Wrapper>
        <Wrapper>
            <div className={cx("security")}>
                <h4>BẢN QUYỀN BÀI VIẾT</h4>
                <div className={cx("container")}>
                    <h4>Mọi việc chia sẻ, trích dẫn từ bài viết của blog đều phải tuân theo các quy định sau:</h4>

                    <ul>
                        <li>Trích dẫn rõ nguồn</li>
                        <li>Không sử dụng vào mục đích thương mại</li>
                        <li>Không được sửa đổi hay làm thay đổi nội dung bài viết</li>
                        <div>© 2015-2019 TÔI ĐI CODE DẠO</div>
                        <div>Creative Commons license</div>
                    </ul>
                </div>
            </div>
        </Wrapper>        
    </div>;
}

export default Sidebar;