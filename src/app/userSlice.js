import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      username: "user1",
      password: "123456",
      displayName: "User Family Tree",
      avatar:
        "https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-hot-girl-nhat-ban.jpg",
      backgroundUser:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcDTvir8dDW4RON-Jr4Oc928TiRFX0TnJ6A&usqp=CAU",
      remember: true,
      myTree: [
        {
          nameTreeFamily: "Gia Phả Họ Phan",
          id: "TF-1",
          avatar: "https://sankid.vn/wp-content/uploads/2021/04/bang-gia-chup-hinh-gia-dinh-tai-sai-gon-moi-nhat-3.jpg",
          address: "42 Đường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh",
          numberhumans: "9",
          data: {
            id: "root-2",
            name: "ROOT",
            children: [
              {
                id: "test-id-8",
                name: "Phan Đế",
                birthday: "1970-02-06T16:00:00.000Z",
                dataHealth: {
                  blood: "A",
                  diseaseTreatment: "Không",
                  diseaseCured: "Không",
                },
                attributes: {
                  Age: 52,
                  Sex: "Male",
                  Relationship: "Chủ Hộ",
                },
                children: [
                  {
                    id: "test-id-17",
                    name: "Lê Thị Hai",
                    birthday: "1972-08-08T16:00:00.000Z",
                    dataHealth: {
                      blood: "B",
                    },
                    attributes: {
                      Age: 50,
                      Sex: "Female",
                      Relationship: "Vợ",
                    },
                  },
                  {
                    id: "test-id-21",
                    name: "Phan Thị Hạnh",
                    birthday: "1991-03-05T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Covid-19",
                      diseaseCured: "Không",
                    },
                    attributes: {
                      Age: 31,
                      Sex: "Female",
                      Relationship: "Con",
                    },
                    children: [
                      {
                        id: "test-id-42",
                        name: "Nguyễn Phúc",
                        birthday: "1990-01-17T17:00:00.000Z",
                        dataHealth: {
                          blood: "O",
                        },
                        attributes: {
                          Age: 32,
                          Sex: "Male",
                          Relationship: "Chồng",
                        },
                      },
                      {
                        id: "test-id-46",
                        name: "Nguyễn Giang",
                        birthday: "2019-01-17T17:00:00.000Z",
                        dataHealth: {
                          blood: "O",
                          diseaseTreatment: "Không",
                          diseaseCured: "Không",
                        },
                        attributes: {
                          Age: 3,
                          Sex: "Male",
                          Relationship: "Con",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    id: "test-id-27",
                    name: "Phan Công Điền",
                    birthday: "1991-03-05T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Sỏi Thận",
                      diseaseCured: "Viêm Gan B",
                    },
                    attributes: {
                      Age: 29,
                      Sex: "Male",
                      Relationship: "Con",
                    },
                    children: [
                      {
                        id: "test-id-55",
                        name: "Lê Thị Viên",
                        birthday: "1996-01-10T17:00:00.000Z",
                        dataHealth: {
                          blood: "AB",
                        },
                        attributes: {
                          Age: 26,
                          Sex: "Female",
                          Relationship: "Vợ",
                        },
                      },
                      {
                        id: "test-id-59",
                        name: "Phan Công Cán",
                        birthday: "2020-09-08T17:00:00.000Z",
                        dataHealth: {
                          blood: "A",
                          diseaseTreatment: "Không",
                          diseaseCured: "Không",
                        },
                        attributes: {
                          Age: 2,
                          Sex: "Male",
                          Relationship: "Con",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    id: "test-id-33",
                    name: "Phan Công Tam",
                    birthday: "1998-03-18T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Viêm Gan B",
                      diseaseCured: "Không",
                    },
                    attributes: {
                      Age: 24,
                      Sex: "Male",
                      Relationship: "Con",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
        },
        {
          nameTreeFamily: "Gia Phả Họ Phùng",
          id: "TF-2",
          avatar: "https://daminhtan.com/images/hue/chup-anh-gia-dinh-can-chuan-bi-gi-1_2.jpg",
          address: "72 Phan Chu Trinh, Quận 1, Hồ Chí Minh",
          numberhumans: "7",
          data: {
            id: "root-1",
            name: "ROOT",
            children: [
              {
                id: "test-id-5",
                name: "Phùng Văn Kháng",
                birthday: "1965-02-26T16:00:00.000Z",
                dataHealth: {
                  blood: "A",
                  diseaseTreatment: "Không",
                  diseaseCured: "Không",
                },
                attributes: {
                  Age: 57,
                  Sex: "Male",
                  Relationship: "Chủ Hộ",
                },
                children: [
                  {
                    id: "test-id-14",
                    name: "Nguyễn Thị Sen",
                    birthday: "1969-11-08T16:00:00.000Z",
                    dataHealth: {
                      blood: "O",
                    },
                    attributes: {
                      Age: 53,
                      Sex: "Female",
                      Relationship: "Vợ",
                    },
                  },
                  {
                    id: "test-id-18",
                    name: "Phùng Văn Đáng",
                    birthday: "1989-03-25T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Mù Màu, Tim",
                      diseaseCured: "Không",
                    },
                    attributes: {
                      Age: 33,
                      Sex: "Male",
                      Relationship: "Con",
                    },
                    children: [
                      {
                        id: "test-id-49",
                        name: "Trần Thị Minh Khai",
                        birthday: "1999-12-15T17:00:00.000Z",
                        dataHealth: {
                          blood: "bloodrare",
                        },
                        attributes: {
                          Age: 23,
                          Sex: "Female",
                          Relationship: "Vợ",
                        },
                      },
                    ],
                  },
                  {
                    id: "test-id-24",
                    name: "Phùng Thị Minh",
                    birthday: "1995-12-06T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Tim",
                      diseaseCured: "Không Có",
                    },
                    attributes: {
                      Age: 27,
                      Sex: "Female",
                      Relationship: "Con",
                    },
                    children: [
                      {
                        id: "test-id-33",
                        name: "Nông Văn Cống",
                        birthday: "1993-12-20T17:00:00.000Z",
                        dataHealth: {
                          blood: "B",
                        },
                        attributes: {
                          Age: 29,
                          Sex: "Male",
                          Relationship: "Chồng",
                        },
                      },
                      {
                        id: "test-id-37",
                        name: "Nông Văn Dền",
                        birthday: "2019-07-31T17:00:00.000Z",
                        dataHealth: {
                          blood: "B",
                          diseaseTreatment: "Mù Màu",
                          diseaseCured: "Không Có",
                        },
                        attributes: {
                          Age: 3,
                          Sex: "Male",
                          Relationship: "Con",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  isLoggedIn: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user.push(action.payload);
      state.isLoggedIn = true;
    },
    fakeLogout: (state, action) => {
      state.user = [];
      state.isLoggedIn = false;
    },
  },
});

const { actions, reducer } = userSlice;

export const { login, fakeLogout } = actions;

export default reducer;
