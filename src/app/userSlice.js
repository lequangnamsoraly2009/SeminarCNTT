import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "user1",
    password: "123456",
    remember: true,
    myTree: [
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
    ],
  },
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
