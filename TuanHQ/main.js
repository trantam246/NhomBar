// Common

/**
 * Lấy số nguyên
 * @param {*} x
 * @returns Số nguyên trong khoảng từ 1 -> x
 */
const getRandomInt = (x) => {
  // Math.random() - trả về số thập phân trong trong khoảng 0 - 1
  // Math.floor() - trả về số nguyên nhỏ hơn hoặc bằng số truyền vào
  // VD; x * 22 = số thập phân luôn nhỏ hơn 22
  return Math.floor(Math.random() * x) + 1; //cộng 1 để lấy từ 1 -> 22
};

// Bài tập 21: Tạo danh sách học viên theo cấu trúc [{id,name,group: {groupId,position}}]
console.log("================ Bài 21==================");
const listStudents = [
  {
    id: 1,
    name: "Nguyễn Văn Sơn",
    group: {
      groupID: 1,
      position: "member",
    },
  },
  {
    id: 2,
    name: "Nguyễn Hữu Ánh",
    group: {
      groupID: 1,
      position: "member",
    },
  },
  {
    id: 3,
    name: "Trần Mạnh Quân",
    group: {
      groupID: 4,
      position: "leader",
    },
  },
  {
    id: 4,
    name: "Hà Quốc Tuấn",
    group: {
      groupID: 3,
      position: "leader",
    },
  },
  {
    id: 5,
    name: "Hoàng Ngọc Thành",
    group: {
      groupID: 1,
      position: "member",
    },
  },
  {
    id: 6,
    name: "Vũ Thị Thu Hà",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 7,
    name: "Phan Văn Trung",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 8,
    name: "Nguyễn Cao Hoàng",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 9,
    name: "Phùng Đắc Nhật Minh",
    group: {
      groupID: 5,
      position: "leader",
    },
  },
  {
    id: 10,
    name: "Lê Việt Dũng",
    group: {
      groupID: 1,
      position: "leader",
    },
  },
  {
    id: 11,
    name: "Đỗ Chí Công",
    group: {
      groupID: 2,
      position: "member",
    },
  },
  {
    id: 12,
    name: "Trần Công Tâm",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 13,
    name: "Trương Thanh Tùng",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 14,
    name: "Tạ Đức Chiến",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 15,
    name: "Nguyễn Trọng Vĩnh",
    group: {
      groupID: 3,
      position: "member",
    },
  },
  {
    id: 16,
    name: "Ngô Chung A Âu",
    group: {
      groupID: 4,
      position: "member",
    },
  },
  {
    id: 17,
    name: "Trần Thị Khánh Linh",
    group: {
      groupID: 2,
      position: "leader",
    },
  },
  {
    id: 18,
    name: "Phan Tiến Thành",
    group: {
      groupID: 4,
      position: "member",
    },
  },
  {
    id: 19,
    name: "Đỗ Văn Huy",
    group: {
      groupID: 4,
      position: "member",
    },
  },
  {
    id: 20,
    name: "Nguyễn Trung Đức",
    group: {
      groupID: 5,
      position: "member",
    },
  },
  {
    id: 21,
    name: "Nguyễn Trung Nam",
    group: {
      groupID: 5,
      position: "member",
    },
  },
  {
    id: 22,
    name: "Trần Quốc Toàn",
    group: {
      groupID: 5,
      position: "member",
    },
  },
];
console.log(listStudents);

// Bài tập 22: Từ danh sách lớp, viết hàm thực hiện lấy tên ngẫu nhiên x học viên trong lớp, với x là tham số truyền vào.
console.log("================ Bài 22==================");

const randomNameXStudent = (x) => {
  // while (result.length < x) {
  //   result.push(listStudents[getRandomInt(listStudents.length) - 1].name);
  // }
  // return result;

  return Array.from({ length: x }, () => {
    return listStudents[getRandomInt(listStudents.length) - 1].name;
  });
};

const randomX_b22 = getRandomInt(22);
console.log(randomX_b22 + " Tên học viên ngẫu nhiên");
console.log(randomNameXStudent(randomX_b22));

// Bài tập 23: Từ danh sách lớp, viết hàm thực hiện lấy ra tên của các thành viên trong nhóm x, với x là tham số truyền vào.
console.log("================ Bài 23==================");

const getNameMemberInGroup = (x) => {
  return listStudents
    .filter((item) => item.group.groupID === x)
    .map((item) => item.name);
};

const randomX_b23 = getRandomInt(5);
console.log("Tên các thành viên nhóm: " + randomX_b23);
console.log(getNameMemberInGroup(randomX_b23));

// Bài tập 24: Từ danh sách lớp, viết hàm nhập điểm cho học viên hàng ngày, các tham số truyền vào (mã số học viên, ngày, điểm), kết quả trả ra [{id,name,group: {id,position}}, points: [{ dayID, dayName, point}].
console.log("================ Bài 24==================");

const days = [
  {
    dayId: 01,
    dayName: "Day01",
  },
  {
    dayId: 02,
    dayName: "Day02",
  },
  {
    dayId: 03,
    dayName: "Day03",
  },
  {
    dayId: 04,
    dayName: "Day04",
  },
  {
    dayId: 05,
    dayName: "Day05",
  },
  {
    dayId: 06,
    dayName: "Day06",
  },
  {
    dayId: 07,
    dayName: "Day07",
  },
];

//
// Tại sao dùng như thế này thì bị thay đổi cả phần từ gốc

// let listStudentsPoints = [...listStudents];

let listStudentsPoints = JSON.parse(JSON.stringify(listStudents));

/**
 * Nhập điểm cho học viên theo ngày
 * @param {*} studentId id học viên
 * @param {*} dayId id ngày
 * @param {*} point điểm nhập vào
 */
const enterScore = (studentId, dayId, point) => {
  // tìm ngày co id === dayId, tạo obj mới có thêm điểm đc truyền vào
  const points = {
    ...days.filter((d) => d.dayId === dayId)[0],
    point: point,
  };
  // update điểm cho học viên
  listStudentsPoints.find((s) => s.id === studentId).points = points;
};

enterScore(1, 02, 9);

console.log("Cập nhật điểm của học viên có id = 1, ngày 02, điểm 9");
console.log(listStudentsPoints);

// Bài tập 25: Viết hàm giả lập điểm cho 1 tuần với tất cả các học viên.
console.log("================ Bài 25==================");

let listStudentsPoints_b25 = JSON.parse(JSON.stringify(listStudents));
// let listStudentsPoints_b25 = [...listStudents];

const enterScoreClass = () => {
  // chạy từng ngày trong tuần
  days.map((d) => {
    //chạy từng học viên theo này
    listStudentsPoints_b25.map((s) => {
      // tạo điểm random
      let point = getRandomInt(11) - 1;
      // tạo obj điểm để thêm vào obj học vien
      const points = { ...d, point };
      // nếu chưa cố key points thì tạo mói
      if (!("points" in s)) {
        s.points = [];
      }
      // thêm diểm vào mảng points trong obj học viên
      s.points.push(points);
    });
  });
};

enterScoreClass();
console.log(listStudentsPoints_b25);

// Bài tập 26: Viết hàm lấy ra danh sách học viên và tổng điểm từng học viên trong khoảng ngày, tham số truyền vào (x,y) với x là ngày bắt đầu, y là ngày kết thúc.
console.log("================ Bài 26==================");

/**
 * Điểm từ ngày x đến ngày y
 * @param {*} dayId_X Từ ngày x
 * @param {*} dayId_Y Đến ngày Y
 * @returns Danh sách gồm tên học viên và tổng điẻm của học viên từ ngày x đén ngày
 */
const getScoreFromXToY = (dayId_X, dayId_Y, arr) => {
  // khởi tạo giá trị trả về
  let result = [];
  // lấy ra mảng chứa các ngày trong khoảng x y
  const daysXY = days.slice(
    days.findIndex((d) => d.dayId === dayId_X),
    days.findIndex((d) => d.dayId === dayId_Y + 1)
  );

  // console.log(daysXY);

  // duyệt mảng học viên
  arr.map((s) => {
    // khởi tạo phần từ đầu ra
    let value = {
      name: s.name,
      score: 0,
    };

    // duyệt phần tử points trong obj học viên
    s.points.map((o) => {
      // nếu dayID của point có trong dayId của khoảng ngày X Y
      if (daysXY.some((dXY) => dXY.dayId === o.dayId)) {
        // cộng dồn điểm
        value.score += o.point;
      }
    });

    result.push(value);
  });

  return result;
};

// const dayx = getRandomInt(7);
// const dayy = getRandomInt(7);
// console.log("Từ ngày " + dayx + " đến ngày " + dayy);
console.log("Từ ngày " + 2 + " đến ngày " + 4);
console.log(getScoreFromXToY(2, 4, listStudentsPoints_b25));

// Bài tập 27: Viết hàm lấy ra top 5 học viên có điểm cao nhất trong khoảng ngày (x,y) truyền vào.
console.log("================ Bài 27==================");

const getTop5Score = () => {
  return getScoreFromXToY(2, 4, listStudentsPoints_b25)
    .sort((a, b) => {
      return b.score - a.score;
    })
    .slice(0, 5);
};

console.log(getTop5Score());

// Bài tập 28: Viết hàm lấy ra tất cả danh sách học viên có điểm từ tham số truyền vào trong khoảng thời gian. Các tham số truyền vào ( x, y, z) với x là ngày bắt đầu, y là ngày kết thúc, z là điểm. Đầu ra [{id, name, totalPoint}]
console.log("================ Bài 28==================");

// Bài tập 29: Viết hàm trả ra cặp học viên trong đó 1 bạn học tốt nhất sẽ bắt cặp với 1 bạn kém
// nhất trong cùng 1 nhóm, tham số đầu vào (x,y) với x là ngày bắt đầu, y là ngày kết thúc. kết quả
// đầu ra [{hocvien1, học vien2, groupName}]

// Bài tập 30: Viết hàm tính tổng số điểm của cả nhóm trong khoảng ngày. với tham số truyền vào
// (x,y) là ngày bắt đầu, kết thúc, kết quả trả ra [{groupName, totalPoint, points: [{hocvien1:
// totalPoint}]]

console.log("===========Mảng ban đầu================");
console.log(listStudents);
