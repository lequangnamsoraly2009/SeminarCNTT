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
          avatar:
            "https://sankid.vn/wp-content/uploads/2021/04/bang-gia-chup-hinh-gia-dinh-tai-sai-gon-moi-nhat-3.jpg",
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
          avatar:
            "https://daminhtan.com/images/hue/chup-anh-gia-dinh-can-chuan-bi-gi-1_2.jpg",
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
        {
          nameTreeFamily: "Gia Phả Họ Lý",
          id: "TF-5",
          avatar: "https://toplist.vn/images/800px/passion-studio-734688.jpg",
          address: "172/12/1 Điện Biên Phủ, Quận 1, Hồ Chí Minh",
          numberhumans: "10",
          data: {
            id: "root-1",
            name: "ROOT",
            children: [
              {
                id: "test-id-4",
                name: "Lý Quốc Anh",
                birthday: "1970-02-17T16:00:00.000Z",
                dataHealth: {
                  blood: "A",
                  diseaseTreatment: "Viêm Gan B",
                  diseaseCured: "Thấp Khớp, Nhồi Máu Cơ Tim",
                },
                attributes: {
                  Age: 52,
                  Sex: "Male",
                  Relationship: "Chủ Hộ",
                },
                children: [
                  {
                    id: "test-id-13",
                    name: "Trần Thị Thơm",
                    birthday: "1972-02-13T16:00:00.000Z",
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
                    id: "test-id-17",
                    name: "Lý Quốc Hào",
                    birthday: "1995-12-10T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Viêm Gan B",
                      diseaseCured: "Không",
                    },
                    attributes: {
                      Age: 27,
                      Sex: "Male",
                      Relationship: "Con",
                    },
                    children: [
                      {
                        id: "test-id-44",
                        name: "Nguyễn Thị Hải",
                        birthday: "1996-05-12T17:00:00.000Z",
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
                        id: "test-id-48",
                        name: "Lý Thị Tuyết",
                        birthday: "2019-04-16T17:00:00.000Z",
                        dataHealth: {
                          blood: "A",
                          diseaseTreatment: "Không",
                          diseaseCured: "Không",
                        },
                        attributes: {
                          Age: 3,
                          Sex: "Female",
                          Relationship: "Con",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    id: "test-id-23",
                    name: "Lý Quốc Minh",
                    birthday: "1997-12-16T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Không",
                      diseaseCured: "Gãy Tay, Đau Nữa Đầu, Méo Miệng",
                    },
                    attributes: {
                      Age: 25,
                      Sex: "Male",
                      Relationship: "Con",
                    },
                    children: [],
                  },
                  {
                    id: "test-id-29",
                    name: "Lý Thị Ly",
                    birthday: "1999-12-21T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Cận Thị",
                      diseaseCured: "Đau Nữa Đầu, Viêm Gan B",
                    },
                    attributes: {
                      Age: 23,
                      Sex: "Female",
                      Relationship: "Con",
                    },
                    children: [
                      {
                        id: "test-id-57",
                        name: "Trịnh Văn Minh",
                        birthday: "1997-05-13T17:00:00.000Z",
                        dataHealth: {
                          blood: "B",
                        },
                        attributes: {
                          Age: 25,
                          Sex: "Male",
                          Relationship: "Chồng",
                        },
                      },
                      {
                        id: "test-id-61",
                        name: "Trịnh Văn Quyết",
                        birthday: "2020-04-23T17:00:00.000Z",
                        dataHealth: {
                          blood: "B",
                          diseaseTreatment:
                            "Viêm Gan B, Máu Khó Đông, Bệnh Tim",
                          diseaseCured: "Lé",
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
                    id: "test-id-35",
                    name: "Lý Thị Lan",
                    birthday: "2001-02-04T17:00:00.000Z",
                    dataHealth: {
                      blood: "A",
                      diseaseTreatment: "Không",
                      diseaseCured: "Không",
                    },
                    attributes: {
                      Age: 21,
                      Sex: "Female",
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
          nameTreeFamily: 'Gia Phả Họ Phạm',
          id: "TF-6",
          avatar: "https://chuyennghiep.vn/upload/news/3-2449.jpg",
          address: "29 Đường số 3, Linh Chiểu, Quận Thủ Đức, Hồ Chí Minh",
          numberhumans: "13",
          data: {
            id: 'root-1',
            name: 'ROOT',
            children: [
              {
                id: 'test-id-7',
                name: 'Phạm Trung',
                birthday: '1962-05-24T16:00:00.000Z',
                dataHealth: {
                  blood: 'A',
                  diseaseTreatment: 'Viêm Gan B, Thấp Khớp, Nhồi Máu Cơ Tim, Cao Huyết Áp',
                  diseaseCured: 'Không'
                },
                attributes: {
                  Age: 60,
                  Sex: 'Male',
                  Relationship: 'Chủ Hộ'
                },
                children: [
                  {
                    id: 'test-id-16',
                    name: 'Lê Thị Minh Khai',
                    birthday: '1966-05-07T16:00:00.000Z',
                    dataHealth: {
                      blood: 'AB'
                    },
                    attributes: {
                      Age: 56,
                      Sex: 'Female',
                      Relationship: 'Vợ'
                    }
                  },
                  {
                    id: 'test-id-20',
                    name: 'Phạm Kiên',
                    birthday: '1989-05-23T17:00:00.000Z',
                    dataHealth: {
                      blood: 'A',
                      diseaseTreatment: 'Viêm Gan B',
                      diseaseCured: 'Lé, Đau Toàn Đầu, Sán'
                    },
                    attributes: {
                      Age: 33,
                      Sex: 'Male',
                      Relationship: 'Con'
                    },
                    children: [
                      {
                        id: 'test-id-39',
                        name: 'Lý Thị Hạnh',
                        birthday: '1989-09-28T17:00:00.000Z',
                        dataHealth: {
                          blood: 'bloodrare'
                        },
                        attributes: {
                          Age: 33,
                          Sex: 'Female',
                          Relationship: 'Vợ'
                        }
                      },
                      {
                        id: 'test-id-43',
                        name: 'Phạm Thị Như',
                        birthday: '2009-05-19T17:00:00.000Z',
                        dataHealth: {
                          blood: 'A',
                          diseaseTreatment: 'Không',
                          diseaseCured: 'Không'
                        },
                        attributes: {
                          Age: 13,
                          Sex: 'Female',
                          Relationship: 'Con'
                        },
                        children: []
                      },
                      {
                        id: 'test-id-49',
                        name: 'Phạm Dũng',
                        birthday: '2012-05-07T17:00:00.000Z',
                        dataHealth: {
                          blood: 'A',
                          diseaseTreatment: 'Không',
                          diseaseCured: 'Không'
                        },
                        attributes: {
                          Age: 10,
                          Sex: 'Male',
                          Relationship: 'Con'
                        },
                        children: []
                      },
                      {
                        id: 'test-id-55',
                        name: 'Phạm Hùng',
                        birthday: '2013-05-14T17:00:00.000Z',
                        dataHealth: {
                          blood: 'A',
                          diseaseTreatment: 'Không',
                          diseaseCured: 'Không'
                        },
                        attributes: {
                          Age: 9,
                          Sex: 'Male',
                          Relationship: 'Con'
                        },
                        children: []
                      },
                      {
                        id: 'test-id-61',
                        name: 'Phạm Anh',
                        birthday: '2019-05-14T17:00:00.000Z',
                        dataHealth: {
                          blood: 'A',
                          diseaseTreatment: 'Viêm Gan B, Đục Thủy Tinh Thể',
                          diseaseCured: 'Không'
                        },
                        attributes: {
                          Age: 3,
                          Sex: 'Male',
                          Relationship: 'Con'
                        },
                        children: []
                      }
                    ]
                  },
                  {
                    id: 'test-id-26',
                    name: 'Phạm Thị Hồng Nhung',
                    birthday: '1989-05-23T17:00:00.000Z',
                    dataHealth: {
                      blood: 'A',
                      diseaseTreatment: 'Không',
                      diseaseCured: 'Không'
                    },
                    attributes: {
                      Age: 30,
                      Sex: 'Female',
                      Relationship: 'Con'
                    },
                    children: [
                      {
                        id: 'test-id-70',
                        name: 'Nguyễn Hoàng Mẫn',
                        birthday: '1990-09-04T17:00:00.000Z',
                        dataHealth: {
                          blood: 'O'
                        },
                        attributes: {
                          Age: 32,
                          Sex: 'Male',
                          Relationship: 'Chồng'
                        }
                      },
                      {
                        id: 'test-id-74',
                        name: 'Nguyễn Hoàng Lý',
                        birthday: '2015-05-12T17:00:00.000Z',
                        dataHealth: {
                          blood: 'A',
                          diseaseTreatment: 'Viêm Gan B',
                          diseaseCured: 'Không'
                        },
                        attributes: {
                          Age: 7,
                          Sex: 'Male',
                          Relationship: 'Con'
                        },
                        children: []
                      },
                      {
                        id: 'test-id-80',
                        name: 'Nguyễn Hoàng Liên',
                        birthday: '2015-05-12T17:00:00.000Z',
                        dataHealth: {
                          blood: 'A',
                          diseaseTreatment: 'Không',
                          diseaseCured: 'Không'
                        },
                        attributes: {
                          Age: 7,
                          Sex: 'Male',
                          Relationship: 'Con'
                        },
                        children: []
                      },
                      {
                        id: 'test-id-86',
                        name: 'Nguyễn Thị Hồng Na',
                        birthday: '2019-05-28T17:00:00.000Z',
                        dataHealth: {
                          blood: 'A',
                          diseaseTreatment: 'Không',
                          diseaseCured: 'Không'
                        },
                        attributes: {
                          Age: 3,
                          Sex: 'Female',
                          Relationship: 'Con'
                        },
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
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
