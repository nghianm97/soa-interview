import type { Metadata } from "next";

export const CHARACTER_AVATARS: Record<string, string> = {
  Doreamon: '/characters/doraemon.png',
  'Cướp biển Jack': '/characters/jack-sparrow.png',
  'Sơn Tùng MTP': '/characters/mtp.jpg',
  'Gấu Biết tuốt': '/characters/panda.jpg',
  'Chị thỏ ngọc': '/characters/rabbit.jpeg',
  'Chị ong nâu': '/characters/bee.png'
}
export const RULER_WIDTH = 240
export const RULER_HEIGHT = 128
export const TYPE_QUIZ_TITLE = {
  single_choice: 'Trắc nghiệm 1 đáp án',
  multiple_choice: 'Trắc nghiệm nhiều đáp án',
  match: 'Điền vào chỗ trống'
}
export const QUIZ_ANSWER_COLOR = [
  '#C33329',
  '#4A9E90',
  '#EF8533',
  '#459EBA',
  '#F6B733',
  '#DCA15F'
]
export const QUIZ_MATCH_COL_COLOR = [
  '#37A602',
  '#668C3F',
  '#97D905',
  '#F3D22F',
  '#F3AA81'
]

export const mock_data = [
  {
    type: 'single_choice',
    score: 1,
    question: 'Hệ tiêu hoá bao gồm các cơ quan nào ?',
    is_answer: true,
    img_question: '',
    img: '',
    answers: [
      {
        is_choose: false,
        is_answer: false,
        text: 'Miệng, dạ dày, thực quản, ruột non, trực tràng, hậu môn'
      },
      {
        is_choose: false,
        is_answer: false,
        text: 'Gan, mật, tuyến nước bọt, tuyến tụy'
      },
      {
        is_choose: true,
        is_answer: true,
        text: 'Trong ống tiêu hoá và tuyến tiêu hoá'
      },
      { is_choose: false, is_answer: false, text: 'Tất cả đều sai' }
    ],
    explain: `<p><strong style="color: rgb(0, 0, 0);">Đáp án: Đúng</strong></p><p><strong style="color: rgb(0, 0, 0);">Giải thích:</strong><span style="color: rgb(0, 0, 0);"> </span></p><p><span style="color: rgb(0, 0, 0);">Hệ tiêu hóa bao gồm hai thành phần chính:</span></p><p><span style="color: rgb(0, 0, 0);">- Ống tiêu hóa: Đây là hệ thống cơ quan mà thức ăn di chuyển qua, bao gồm miệng, thực quản, dạ dày, ruột non, ruột già, trực tràng, và hậu môn.</span></p><p><span style="color: rgb(0, 0, 0);">- Tuyến tiêu hóa: Đây là các cơ quan hỗ trợ tiêu hóa thông qua việc sản xuất và tiết ra các enzyme và dịch tiêu hóa, bao gồm tuyến nước bọt, gan, mật, và tuyến tụy.</span></p>`
  },
  {
    type: 'single_choice',
    score: 1,
    question: 'Dinh dưỡng là gì?',
    is_answer: true,
    img_question: '',
    img: '',
    answers: [
      {
        is_choose: true,
        is_answer: true,
        text: 'Quá trình hấp thụ, biến đổi và sử dụng chất dinh dưỡng để duy trì sự sống'
      },
      {
        is_choose: false,
        is_answer: false,
        text: 'Quá trình hấp thụ và đào thải chất dinh dưỡng để duy trì sự sống'
      },
      {
        is_choose: false,
        is_answer: false,
        text: 'Quá trình hấp thụ các chất dư thừa để duy trì sự sống'
      },
      {
        is_choose: false,
        is_answer: false,
        text: 'Quá trình các chất trong thức ăn sử dụng làm nguyên liệu để duy trì sự sống'
      }
    ],
    explain: `<p><strong style="color: rgb(0, 0, 0);">Đáp án: Đúng</strong></p><p><strong style="color: rgb(0, 0, 0);">Giải thích:</strong></p><p><span style="color: rgb(0, 0, 0);">Dinh dưỡng là quá trình cơ thể hấp thụ các chất dinh dưỡng từ thức ăn, sau đó biến đổi và sử dụng chúng để duy trì các hoạt động sống như sản sinh năng lượng, sửa chữa tế bào, và thực hiện các chức năng sinh lý khác. Điều này bao gồm việc cơ thể nhận chất dinh dưỡng, chuyển hóa chúng thành các dạng có thể sử dụng được, và loại bỏ các chất thải không cần thiết.</span></p><p><br></p>`
  },
  {
    type: 'single_choice',
    score: 1,
    question: 'Hệ tiêu hoá có chức năng gì?',
    is_answer: true,
    img_question: '',
    img: '',
    answers: [
      {
        is_choose: false,
        is_answer: false,
        text: 'Biến đổi thức ăn thành chất đào thải mà cơ thể hấp thụ ra khỏi cơ thể'
      },
      {
        is_choose: true,
        is_answer: true,
        text: 'Biến đổi thức ăn thành các chất dinh dưỡng mà cơ thể hấp thụ và loại các chất đào thải ra khỏi cơ thể'
      },
      {
        is_choose: false,
        is_answer: false,
        text: 'Biến các chất dinh dưỡng mà cơ thể hấp thụ loại ra các chất đào thải khỏi cơ thể '
      },
      {
        is_choose: false,
        is_answer: false,
        text: 'Biến các thức ăn mà cơ thể hấp thụ thành chất dinh dưỡng và đào thải ra khỏi cơ thể'
      }
    ],
    explain: `<p><strong style="color: rgb(0, 0, 0);">Đáp án: Đúng</strong></p><p><strong style="color: rgb(0, 0, 0);">Giải thích:</strong></p><p><span style="color: rgb(0, 0, 0);">Hệ tiêu hóa có hai chức năng chính:</span></p><p><span style="color: rgb(0, 0, 0);">- Biến đổi thức ăn thành các chất dinh dưỡng: Thức ăn sau khi đi vào cơ thể được hệ tiêu hóa xử lý, chuyển đổi thành các chất dinh dưỡng như protein, carbohydrate, lipid, vitamin và khoáng chất. Những chất này sau đó được hấp thụ qua thành ruột non để cung cấp năng lượng và vật liệu cho cơ thể.</span></p><p><span style="color: rgb(0, 0, 0);">- Loại bỏ các chất thải: Những phần của thức ăn không thể tiêu hóa hoặc không cần thiết (chất thải) sẽ được hệ tiêu hóa đẩy ra khỏi cơ thể qua ruột già và hậu môn.</span></p><p><br></p><p><br></p>`
  },
  {
    type: 'single_choice',
    score: 1,
    question: 'Hoạt động nào không xảy ra ở dạ dày?',
    is_answer: true,
    img_question: '',
    img: '',
    answers: [
      { is_choose: false, is_answer: false, text: 'Biến đổi cơ học thức ă' },
      { is_choose: false, is_answer: false, text: 'Biến đổi hoá học thức ăn' },
      { is_choose: false, is_answer: false, text: 'Tiết dịch tiêu hoá' },
      { is_choose: true, is_answer: true, text: 'Hấp thụ chất dinh dưỡng' }
    ],
    explain: `<p><strong style="color: rgb(0, 0, 0);">Đáp án: Đúng</strong></p><p><strong style="color: rgb(0, 0, 0);">Giải thích:</strong></p><p><span style="color: rgb(0, 0, 0);">Dạ dày là nơi nhận thức ăn từ thực quản xuống, tiếp tục quá trình tiêu hóa cơ học và hóa học: Tiêu hóa cơ học: Hoạt động co bóp của dạ dày giúp thức ăn được nhuyễn và thấm đều dịch vị. Tiêu hóa hóa học: Enzyme pepsin trong dịch vị của dạ dày giúp biến đổi một phần protein trong thức ăn.</span></p><p><br></p><p><br></p>`
  },
  {
    type: 'single_choice',
    score: 1,
    question: 'Tác dụng khi xây dựng thói quen ăn uống, sinh hoạt khoa học là?',
    is_answer: true,
    img_question: '',
    img: '',
    answers: [
      { is_choose: false, is_answer: false, text: 'Nước, vitamin' },
      { is_choose: false, is_answer: false, text: 'Nước, protein, vitamin' },
      { is_choose: true, is_answer: true, text: 'Nước, vitamin, muối khoáng' },
      {
        is_choose: false,
        is_answer: false,
        text: 'Vitamin, protein, muối khoáng'
      }
    ],
    explain: `<p><strong style="color: rgb(0, 0, 0);">Đáp án: Đúng</strong></p><p><strong style="color: rgb(0, 0, 0);">Giải thích:</strong></p><p><span style="color: rgb(0, 0, 0);">Xây dựng thói quen ăn uống và sinh hoạt khoa học giúp cơ thể hấp thụ đủ các chất dinh dưỡng cần thiết, trong đó nước, vitamin và muối khoáng đóng vai trò quan trọng cho các chức năng sống của cơ thể:</span></p><p><strong style="color: rgb(0, 0, 0);">- Nước: </strong><span style="color: rgb(0, 0, 0);">Là yếu tố thiết yếu cho mọi hoạt động sinh hóa trong cơ thể. Nó giúp điều hòa nhiệt độ cơ thể, hỗ trợ tiêu hóa, và loại bỏ các chất thải qua hệ bài tiết.</span></p><p><strong style="color: rgb(0, 0, 0);">- Vitamin:</strong><span style="color: rgb(0, 0, 0);"> Đóng vai trò trong các phản ứng trao đổi chất, bảo vệ hệ miễn dịch và duy trì sức khỏe chung của cơ thể.</span></p><p><strong style="color: rgb(0, 0, 0);">- Muối khoáng: </strong><span style="color: rgb(0, 0, 0);">Cần thiết cho nhiều quá trình như duy trì cân bằng điện giải, hỗ trợ cấu trúc xương và răng, và tham gia vào chức năng của các enzym.</span></p><p><br></p>`
  },
  {
    type: 'single_choice',
    score: 0,
    question:
      'Các chất nào trong thức ăn được biến đổi về mặt hóa học qua quá trình tiêu hóa?',
    img_question: '',
    is_answer: false,
    img: '',
    answers: [
      {
        is_choose: false,
        is_answer: true,
        text: ' Gluxit, Lipit, Protein, Axit nucleic.'
      },
      { is_choose: false, is_answer: false, text: 'Protein, Gluxit, Lipit' },
      {
        is_choose: true,
        is_answer: false,
        text: 'Gluxit, Lipit, Axit nucleic.'
      },
      {
        is_choose: false,
        is_answer: false,
        text: 'Gluxit, Protein, Axit nucleic'
      }
    ],
    explain: `<p><strong style="color: rgb(0, 0, 0);">Đáp án: Sai</strong></p><p><strong style="color: rgb(0, 0, 0);">Đáp án đúng: A</strong></p><p><strong style="color: rgb(0, 0, 0);">Giải thích: </strong><span style="color: rgb(0, 0, 0);">Các chất trong thức ăn được biến đổi về mặt hóa học trong quá trình tiêu hóa gồm:</span></p><p><span style="color: rgb(0, 0, 0);">- Gluxit (carbohydrate): Được phân giải thành đường đơn (như glucose) để cung cấp năng lượng cho cơ thể.</span></p><p><span style="color: rgb(0, 0, 0);">- Lipit (chất béo): Được phân giải thành axit béo và glycerol để sử dụng trong việc dự trữ năng lượng và tạo thành màng tế bào.</span></p><p><span style="color: rgb(0, 0, 0);">- Protein: Được phân giải thành các axit amin để cơ thể sử dụng trong việc tổng hợp protein mới và các chức năng quan trọng khác.</span></p><p><span style="color: rgb(0, 0, 0);">- Axit nucleic (DNA và RNA): Được phân giải thành nucleotide để tái sử dụng trong các quá trình sinh học của tế bào.</span></p><p><br></p>`
  },
  {
    type: 'essay',
    score: 2,
    question: 'Vì sao nhai kĩ sẽ giúp hệ tiêu hóa hoạt động hiệu quả hơn?',
    is_answer: true,
    img_question: '',
    img: '/gkebook/1/quizz/bai_1/quizz_1/img_4125.jpg',
    answers: '',
    explain: `<p><span style="color: rgb(0, 0, 0);">Các ý 1, 2 và 4: Hoàn toàn đúng.</span></p><p><span style="color: rgb(0, 0, 0);">Ý 3: Thiếu</span></p><p><span style="color: rgb(0, 0, 0);">Nhai kỹ hỗ trợ một phần trong việc phá vỡ lớp vỏ cellulose, nhưng việc tiêu hóa và hấp thụ chất dinh dưỡng từ các loại thực phẩm có vỏ cellulose phụ thuộc chủ yếu vào vi khuẩn trong ruột chứ không phải hoàn toàn do việc nhai kỹ.</span></p><p><br></p><p><strong style="color: rgb(0, 0, 0);">Giải thích</strong><span style="color: rgb(0, 0, 0);">: Cellulose là một chất khó tiêu hóa đối với cơ thể người. Dù việc nhai kỹ có thể giúp làm mềm và phá vỡ một phần thức ăn, nhưng lớp vỏ cellulose thực chất cần được tiêu hóa nhờ các vi khuẩn trong ruột. Nhai kỹ không hoàn toàn phá vỡ cellulose, mà chỉ tạo điều kiện thuận lợi cho quá trình tiêu hóa sau này.</span></p><p><br></p>`
  },
  {
    type: 'essay',
    score: 2,
    question:
      'Em hãy lập bảng cho biết một số thông tin liên quan đến đường tiêu hoá theo mẫu sau: ',
    is_answer: true,
    img_question: '/img/img_homework.png',
    img: '/gkebook/1/quizz/bai_1/quizz_1/img_4118.jpg',
    answers: '',
    explain: `<p><strong style="color: rgb(0, 0, 0);">Bệnh 1:</strong><span style="color: rgb(0, 0, 0);"> Sâu răng</span></p><p><span style="color: rgb(0, 0, 0);">Nguyên nhân: Đúng.</span></p><p><span style="color: rgb(0, 0, 0);">Triệu chứng: Đúng.</span></p><p><span style="color: rgb(0, 0, 0);">Cách phòng, chống: Thiếu</span></p><p><span style="color: rgb(0, 0, 0);">Cách phòng chống sâu răng là vệ sinh răng miệng thường xuyên và đúng cách (chải răng ít nhất 2 lần/ngày, sử dụng chỉ nha khoa, hạn chế đồ ngọt).</span></p><p><strong style="color: rgb(0, 0, 0);">Giải thích</strong><span style="color: rgb(0, 0, 0);">: Sâu răng phát triển do vi khuẩn tích tụ trong các mảng bám thức ăn còn sót lại, đặc biệt là đường. Việc vệ sinh răng miệng giúp loại bỏ vi khuẩn và mảng bám, ngăn ngừa sâu răng phát triển.</span></p><p><br></p><p><strong style="color: rgb(0, 0, 0);">Bệnh 2: Tiêu chảy cấp tính</strong></p><p><span style="color: rgb(0, 0, 0);">Nguyên nhân: Đúng</span></p><p><span style="color: rgb(0, 0, 0);">Triệu chứng: Đúng</span></p><p><span style="color: rgb(0, 0, 0);">Cách phòng, chống: Đúng</span></p><p><br></p><p><strong style="color: rgb(0, 0, 0);">Bệnh 3: Táo bón</strong></p><p><span style="color: rgb(0, 0, 0);">Nguyên nhân: Thiếu. Chưa nêu được các nguyên nhân chính gây táo bón như thiếu chất xơ trong chế độ ăn, thiếu nước, ít vận động, thói quen nhịn đi vệ sinh.</span></p><p><span style="color: rgb(0, 0, 0);">Triệu chứng: Đúng</span></p><p><span style="color: rgb(0, 0, 0);">Cách phòng, chống: Chưa đẩy đủ. Bổ sung tăng cường ăn chất xơ từ rau củ, trái cây và uống nhiều nước.</span></p>`
  }
]

export const DEFAULT_PHONE = '+84868706680'

export const value_lesion =
  'Bài 37: Số đo góc\n\n📖 Mục lục\nĐo góc\nCác góc đặc biệt\nBài tập\nEm có biết?\n\n📚 Khái niệm, thuật ngữ\nSố đo góc\nGóc vuông\nGóc nhọn\nGóc tù\n\n✏️ Kiến thức, kỹ năng\nNhận biết được khái niệm số đo góc.\nNhận biết được các góc đặc biệt (góc vuông, góc nhọn, góc tù).\n\nTrong các tình huống đá phạt trực tiếp ở môn bóng đá, bình luận viên thường nói quả đá phạt có góc sút rộng nếu ở gần chính giữa khung thành, quả đá phạt có góc sút hẹp nếu lệch về hai bên. Với một góc tuy ý, để đo độ rộng hẹp của góc, gọi chung là độ lớn, người ta thường dùng thước đo góc.\n\n💬 Số đo góc\nMuốn đo góc xOy, ta đặt thước đo góc sao cho tâm của thước trùng với O, tia Ox đi qua vạch 0. Khi đó tia Oy đi qua vạch chỉ số đo của góc. Trên Hình 8.51, ta thấy Oy đi qua vạch 110. Vậy góc xOy có số đo là 110 độ. Ta viết xOỹ = 110°\nMỗi góc có một số đo. Số đo của một góc không vượt quá 180°.\n\n⚠️ Chú ý:\nNgười ta so sánh hai góc bằng cách so sánh số đo của chúng. Chẳng hạn:\n\nHai góc xAy và mCn có số đo bằng nhau. Ta viết xAy = mCn và nói góc xAy bằng góc mCn.\nGóc tBz có số đo lớn hơn góc xAy. Ta viết tBz > XAy và nói góc tBz lớn hơn góc xAy hoặc XAy < tBz và nói góc xAy nhỏ hơn góc tBz.\n\n2. Các góc đặc biệt\n💬 Góc vuông, góc nhọn, góc tù\nGóc có số đo bằng 90° là góc vuông.\nGóc bẹt có số đo bằng 180°.\nGóc nhỏ hơn góc vuông là góc nhọn.\nGóc lớn hơn góc vuông, nhỏ hơn góc bẹt là góc tù.\n\nEm có biết?\nThước đo góc đơn giản nhất là một nửa hình tròn được chia thành 180 phần bằng nhau bởi các vạch, ứng với 180 góc bằng nhau. Góc đó được chọn làm đơn vị đo góc và gọi là độ. Trên thước có ghi từ 0 (độ) đến 180 (độ). Tâm của nửa hình tròn cũng gọi là tâm của thước.'

export const VALUE_EXERCISE_MATH =
  'A. KIẾN THỨC CẦN NHỚ\n1. Số đo của một góc\nMỗi góc có một số đo góc (đơn vị là độ); Góc bẹt có số đo bằng 180o; Hai tia trùng nhau được coi là góc có số đo bằng 0o\nNếu hai góc A và B có số đo bằng nhau thì ta nói hai góc bằng nhau và viết A^ = B^\nNếu góc A có số đo nhỏ hơn số đo của góc B thì ta nói góc A nhỏ hơn góc B và viết A^ < B^. Khi đó ta còn nói góc B lớn hơn góc A và viết B^ > A^\n\n2. Các loại góc: Góc nhọn, góc vuông (=90o), góc tù, góc bẹt (=180o)\n\nB. KỸ NĂNG GIẢI TOÁN\n1. Số đo của một góc\nNhận biết số đo của một góc, hai góc bằng nhau\nĐo và so sánh hai góc nhờ số đo\nVẽ góc có số đo cho trước\nNhận biết góc vuông, góc nhọn, góc tù, góc bẹt\nChú ý\nQuan sát thước đo góc, em sẽ thấy hai dãy số 0; 10; 20; ... ; 180 xếp thành hai vòng cung theo hai chiều ngược nhau. Mỗi một vạch trên thước đều tương ứng với hai số (thuộc hai vòng cung khác nhau: một lớn, một nhỏ)\nKhi đọc kết quả, em cần đọc số nằm trên cùng một vòng cung với số 0 (ứng với vạch mà cạnh thứ nhất của góc đi qua). Một nhận xét rất hữu ích là: Hai số đo góc ứng với cùng một vạch trên hai vòng cung luôn có tổng bằng 180o.'

export const metadata: Metadata = {
  title: 'Sách Điện Tử Kiến Thức Phổ Thông GK - EBOOKS',
  description:
    'Sách Điện Tử Kiến Thức Phổ Thông GK - EBOOKS là ứng dụng cung cấp kho sách giáo khoa bản quyền từ Nhà Xuất Bản Giáo Dục miễn phí và thuận tiện cho mọi cấp học',
  icons: [{ sizes: '16x16', url: '/gkebook-logo.png' }],
  openGraph: {
    title: 'Sách Điện Tử Kiến Thức Phổ Thông GK - EBOOKS',
    url: 'https://gkebooks.edu.vn',
    siteName: 'GKEbooks',
    description:
      'Sách Điện Tử Kiến Thức Phổ Thông GK - EBOOKS là ứng dụng cung cấp kho sách giáo khoa bản quyền từ Nhà Xuất Bản Giáo Dục miễn phí và thuận tiện cho mọi cấp học',
    images: [
      {
        url: 'https://gkebooks.edu.vn/landing/group22.png',
        width: 800,
        height: 600
      },
      {
        url: 'https://gkebooks.edu.vn/landing/group22.png',
        width: 1800,
        height: 1600
      }
    ]
  },
  alternates: {
    canonical: 'https://gkebooks.edu.vn/'
  },
  twitter: {
    title: 'Sách Điện Tử Kiến Thức Phổ Thông GK - EBOOKS',
    card: 'summary_large_image',
    description:
      'Sách Điện Tử Kiến Thức Phổ Thông GK - EBOOKS là ứng dụng cung cấp kho sách giáo khoa bản quyền từ Nhà Xuất Bản Giáo Dục miễn phí và thuận tiện cho mọi cấp học',
    images: [
      {
        url: 'https://gkebooks.edu.vn/landing/group22.png',
        width: 800,
        height: 600
      },
      {
        url: 'https://gkebooks.edu.vn/landing/group22.png',
        width: 1800,
        height: 1600
      }
    ]
  }
}
export const MOBILE_BREAKPOINT = 768;

