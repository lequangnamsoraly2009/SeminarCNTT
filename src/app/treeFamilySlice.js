import { createSlice } from "@reduxjs/toolkit";

const dataTestTreeFamily = [
  {
    nameTreeFamily: "Gia Phả Họ Phan",
    id: "TF-1",
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
    nameTreeFamily: "Gia Phả Họ Trần",
    id: "TF-3",
    data: {
      id: "root-1",
      name: "ROOT",
      children: [
        {
          id: "test-id-4",
          name: "Trần Văn Khánh",
          birthday: "1960-09-16T16:00:00.000Z",
          dataHealth: {
            blood: "A",
            diseaseTreatment: "Cơ Tim , Cao Huyết Áp, Nhồi Máu Cơ Tim",
            diseaseCured: "Ung Thư Gan",
          },
          attributes: {
            Age: 62,
            Sex: "Male",
            Relationship: "Chủ Hộ",
          },
          children: [
            {
              id: "test-id-13",
              name: "Nguyễn Thị Nguyệt",
              birthday: "1965-03-29T16:00:00.000Z",
              dataHealth: {
                blood: "B",
              },
              attributes: {
                Age: 57,
                Sex: "Female",
                Relationship: "Vợ",
              },
            },
            {
              id: "test-id-17",
              name: "Trần Văn Khải",
              birthday: "1985-11-05T17:00:00.000Z",
              dataHealth: {
                blood: "A",
                diseaseTreatment: "Suy Thận, Viêm Gan B, Đái Tháo Đường",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 37,
                Sex: "Male",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-60",
                  name: "Lê Thị Hồng Anh",
                  birthday: "1989-01-11T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                  },
                  attributes: {
                    Age: 33,
                    Sex: "Female",
                    Relationship: "Vợ",
                  },
                },
                {
                  id: "test-id-64",
                  name: "Trần Thị Diễm Linh",
                  birthday: "2015-06-15T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                    diseaseTreatment: "Khô Mắt, Gù Cột Sống, Méo Miệng",
                    diseaseCured: "Sâu Răng",
                  },
                  attributes: {
                    Age: 7,
                    Sex: "Female",
                    Relationship: "Con",
                  },
                  children: [],
                },
                {
                  id: "test-id-70",
                  name: "Trần Văn Minh",
                  birthday: "2019-06-05T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
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
              id: "test-id-23",
              name: "Trần Văn Nguyên",
              birthday: "1987-11-04T17:00:00.000Z",
              dataHealth: {
                blood: "A",
                diseaseTreatment: "Suy Thận,Đái Tháo Đường",
                diseaseCured: "Viêm Gan B",
              },
              attributes: {
                Age: 35,
                Sex: "Male",
                Relationship: "Con",
              },
              children: [],
            },
            {
              id: "test-id-33",
              name: "Trần Thị Diễm My",
              birthday: "1989-11-05T17:00:00.000Z",
              dataHealth: {
                blood: "A",
                diseaseTreatment: "Không",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 33,
                Sex: "Female",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-105",
                  name: "Lê Văn Huy",
                  birthday: "1986-02-11T17:00:00.000Z",
                  dataHealth: {
                    blood: "AB",
                  },
                  attributes: {
                    Age: 36,
                    Sex: "Male",
                    Relationship: "Chồng",
                  },
                },
                {
                  id: "test-id-109",
                  name: "Lê Văn Mẫn",
                  birthday: "2010-07-13T17:00:00.000Z",
                  dataHealth: {
                    blood: "AB",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 12,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "test-id-39",
              name: "Trần Thị Diễm Quỳnh",
              birthday: "1991-09-07T17:00:00.000Z",
              dataHealth: {
                blood: "A",
                diseaseTreatment: "Không",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 31,
                Sex: "Female",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-92",
                  name: "Trịnh Văn Hà",
                  birthday: "1985-02-12T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                  },
                  attributes: {
                    Age: 37,
                    Sex: "Male",
                    Relationship: "Chồng",
                  },
                },
                {
                  id: "test-id-96",
                  name: "Trịnh Văn Anh",
                  birthday: "2012-07-10T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 10,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "test-id-45",
              name: "Trần Văn Lộc",
              birthday: "1993-09-03T17:00:00.000Z",
              dataHealth: {
                blood: "A",
                diseaseTreatment: "Viêm Gan B",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 29,
                Sex: "Male",
                Relationship: "Con",
              },
              children: [],
            },
            {
              id: "test-id-51",
              name: "Trần Thị Diễm Hồng",
              birthday: "1999-11-13T17:00:00.000Z",
              dataHealth: {
                blood: "A",
                diseaseTreatment: "Cận Thị",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 23,
                Sex: "Female",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-79",
                  name: "Cao Bá ",
                  birthday: "1990-05-01T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                  },
                  attributes: {
                    Age: 32,
                    Sex: "Male",
                    Relationship: "Chồng",
                  },
                },
                {
                  id: "test-id-83",
                  name: "Cao  Đài",
                  birthday: "2020-06-04T17:00:00.000Z",
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
          ],
        },
      ],
    },
  },
  {
    nameTreeFamily: "Gia Phả Họ Nguyễn",
    id: "TF-4",
    data: {
      id: "root-1",
      name: "ROOT",
      children: [
        {
          id: "test-id-4",
          name: "Nguyễn Hoàng Mẫn",
          birthday: "1950-05-23T16:00:00.000Z",
          dataHealth: {
            blood: "O",
            diseaseTreatment: "Viêm Gan B, Ung Thư Phổi",
            diseaseCured: "Không",
          },
          attributes: {
            Age: 72,
            Sex: "Male",
            Relationship: "Chủ Hộ",
          },
          children: [
            {
              id: "test-id-13",
              name: "Lý Thị Lan",
              birthday: "1955-05-19T16:00:00.000Z",
              dataHealth: {
                blood: "AB",
              },
              attributes: {
                Age: 67,
                Sex: "Female",
                Relationship: "Vợ",
              },
            },
            {
              id: "test-id-17",
              name: "Nguyễn Hoàng Huy",
              birthday: "1975-05-18T16:00:00.000Z",
              dataHealth: {
                blood: "O",
                diseaseTreatment: "Ung Thư Phổi",
                diseaseCured: "Thoái Hóa, Đau Cột Sống",
              },
              attributes: {
                Age: 47,
                Sex: "Male",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-59",
                  name: "Nguyễn Thị Tuyết Nhi",
                  birthday: "1999-01-12T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Viêm Gan B, Đau Khớp, Trĩ",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 23,
                    Sex: "Female",
                    Relationship: "Con",
                  },
                  children: [
                    {
                      id: "test-id-93",
                      name: "Phan Công Tú",
                      birthday: "1996-05-11T17:00:00.000Z",
                      dataHealth: {
                        blood: "B",
                      },
                      attributes: {
                        Age: 26,
                        Sex: "Male",
                        Relationship: "Chồng",
                      },
                    },
                    {
                      id: "test-id-97",
                      name: "Phan Thị An",
                      birthday: "2019-05-05T17:00:00.000Z",
                      dataHealth: {
                        blood: "O",
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
                    {
                      id: "test-id-103",
                      name: "Phan Công Lý",
                      birthday: "2021-01-03T17:00:00.000Z",
                      dataHealth: {
                        blood: "O",
                        diseaseTreatment: "Không",
                        diseaseCured: "Không",
                      },
                      attributes: {
                        Age: 1,
                        Sex: "Male",
                        Relationship: "Con",
                      },
                      children: [],
                    },
                  ],
                },
                {
                  id: "test-id-68",
                  name: "Lê Thị Hồng Hạnh",
                  birthday: "1976-05-10T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                  },
                  attributes: {
                    Age: 46,
                    Sex: "Female",
                    Relationship: "Vợ",
                  },
                },
                {
                  id: "test-id-72",
                  name: "Nguyễn Hoàng Minh",
                  birthday: "1997-01-03T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Trĩ, Cận Thị",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 25,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [
                    {
                      id: "test-id-112",
                      name: "Trần Thị Minh Ngọc",
                      birthday: "1999-05-12T17:00:00.000Z",
                      dataHealth: {
                        blood: "B",
                      },
                      attributes: {
                        Age: 23,
                        Sex: "Female",
                        Relationship: "Vợ",
                      },
                    },
                    {
                      id: "test-id-116",
                      name: "Nguyễn Hoàng Kỳ ",
                      birthday: "2017-05-02T17:00:00.000Z",
                      dataHealth: {
                        blood: "O",
                        diseaseTreatment: "Không",
                        diseaseCured: "Không",
                      },
                      attributes: {
                        Age: 5,
                        Sex: "Male",
                        Relationship: "Con",
                      },
                      children: [],
                    },
                  ],
                },
                {
                  id: "test-id-78",
                  name: "Nguyễn Hoàng Thông",
                  birthday: "2000-12-31T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Méo Miệng",
                  },
                  attributes: {
                    Age: 21,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
                {
                  id: "test-id-84",
                  name: "Nguyễn Hoàng Long",
                  birthday: "2003-01-14T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 19,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "test-id-23",
              name: "Nguyễn Hoàng Hiệu",
              birthday: "1977-05-10T17:00:00.000Z",
              dataHealth: {
                blood: "O",
                diseaseTreatment: "Không",
                diseaseCured: "Đau Cột Sống",
              },
              attributes: {
                Age: 45,
                Sex: "Male",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-201",
                  name: "Lê Thị Điệp",
                  birthday: "1982-05-10T17:00:00.000Z",
                  dataHealth: {
                    blood: "AB",
                  },
                  attributes: {
                    Age: 40,
                    Sex: "Female",
                    Relationship: "Vợ",
                  },
                },
                {
                  id: "test-id-205",
                  name: "Nguyễn Thị Như ",
                  birthday: "1999-05-26T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 23,
                    Sex: "Female",
                    Relationship: "Con",
                  },
                  children: [
                    {
                      id: "test-id-226",
                      name: "Lê Văn Chí",
                      birthday: "1996-05-05T17:00:00.000Z",
                      dataHealth: {
                        blood: "A",
                      },
                      attributes: {
                        Age: 26,
                        Sex: "Male",
                        Relationship: "Chồng",
                      },
                    },
                    {
                      id: "test-id-230",
                      name: "Lê Văn Hùng",
                      birthday: "2020-05-12T17:00:00.000Z",
                      dataHealth: {
                        blood: "O",
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
                  id: "test-id-211",
                  name: "Nguyễn Thị Tuyết",
                  birthday: "2001-06-13T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
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
                {
                  id: "test-id-217",
                  name: "Nguyễn Thị Vy",
                  birthday: "2004-06-16T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 18,
                    Sex: "Female",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "test-id-29",
              name: "Nguyễn Thị Hồng Lan",
              birthday: "1979-05-29T17:00:00.000Z",
              dataHealth: {
                blood: "O",
                diseaseTreatment: "Máu Không Đông",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 43,
                Sex: "Female",
                Relationship: "Con",
              },
              children: [],
            },
            {
              id: "test-id-35",
              name: "Nguyễn Thị Hồng Hồng",
              birthday: "1981-06-15T17:00:00.000Z",
              dataHealth: {
                blood: "O",
                diseaseTreatment: "Không",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 41,
                Sex: "Female",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-182",
                  name: "Mạc Thiên Nha",
                  birthday: "1975-09-24T17:00:00.000Z",
                  dataHealth: {
                    blood: "B",
                  },
                  attributes: {
                    Age: 47,
                    Sex: "Male",
                    Relationship: "Chồng",
                  },
                },
                {
                  id: "test-id-186",
                  name: "Mạc Văn Khoa",
                  birthday: "1996-04-30T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 26,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
                {
                  id: "test-id-192",
                  name: "Mạc Thị Khoái",
                  birthday: "1998-05-04T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 24,
                    Sex: "Female",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "test-id-41",
              name: "Nguyễn Thị Hồng Linh",
              birthday: "1983-06-21T17:00:00.000Z",
              dataHealth: {
                blood: "O",
                diseaseTreatment: "Viêm Gan B, Ung Thư Phổi",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 39,
                Sex: "Female",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-157",
                  name: "Lê Công Hào",
                  birthday: "1980-05-06T17:00:00.000Z",
                  dataHealth: {
                    blood: "B",
                  },
                  attributes: {
                    Age: 42,
                    Sex: "Male",
                    Relationship: "Chồng",
                  },
                },
                {
                  id: "test-id-164",
                  name: "Lê Công Uẩn",
                  birthday: "2006-09-04T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 16,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
                {
                  id: "test-id-170",
                  name: "Lê Công Sáng",
                  birthday: "2003-09-02T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 19,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "test-id-47",
              name: "Nguyễn Hoàng Giang",
              birthday: "1985-06-14T17:00:00.000Z",
              dataHealth: {
                blood: "O",
                diseaseTreatment: "Không",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 37,
                Sex: "Male",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-144",
                  name: "Trần Thị Đào",
                  birthday: "1989-05-29T17:00:00.000Z",
                  dataHealth: {
                    blood: "A",
                  },
                  attributes: {
                    Age: 33,
                    Sex: "Female",
                    Relationship: "Vợ",
                  },
                },
                {
                  id: "test-id-148",
                  name: "Nguyễn Thị Nga",
                  birthday: "2010-05-05T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 12,
                    Sex: "Female",
                    Relationship: "Con",
                  },
                  children: [],
                },
              ],
            },
            {
              id: "test-id-53",
              name: "Nguyễn Hoàng Trung",
              birthday: "1989-06-03T17:00:00.000Z",
              dataHealth: {
                blood: "O",
                diseaseTreatment: "Không",
                diseaseCured: "Không",
              },
              attributes: {
                Age: 33,
                Sex: "Male",
                Relationship: "Con",
              },
              children: [
                {
                  id: "test-id-125",
                  name: "Trịnh Thị Nhi",
                  birthday: "1990-05-08T17:00:00.000Z",
                  dataHealth: {
                    blood: "bloodrare",
                  },
                  attributes: {
                    Age: 32,
                    Sex: "Female",
                    Relationship: "Vợ",
                  },
                },
                {
                  id: "test-id-129",
                  name: "Nguyễn Hoàng Trường",
                  birthday: "2013-05-14T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 9,
                    Sex: "Male",
                    Relationship: "Con",
                  },
                  children: [],
                },
                {
                  id: "test-id-135",
                  name: "Nguyễn Thị Huế",
                  birthday: "2015-05-04T17:00:00.000Z",
                  dataHealth: {
                    blood: "O",
                    diseaseTreatment: "Không",
                    diseaseCured: "Không",
                  },
                  attributes: {
                    Age: 7,
                    Sex: "Female",
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
                    diseaseTreatment: "Viêm Gan B, Máu Khó Đông, Bệnh Tim",
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
];

const treeFamilySlice = createSlice({
  name: "treeFamily",
  initialState: dataTestTreeFamily,
  reducers: {
    addTree: (state, action) => {
      state.push(action.payload);
    },
    // removeOneCart: (state, action) => {
    //   const cartRemove = action.payload;
    //   state.carts = state.carts.filter((cart) => cart._id !== cartRemove);
    // }
  },
});

const { actions, reducer } = treeFamilySlice;

export const { addTree } = actions;

export default reducer;
