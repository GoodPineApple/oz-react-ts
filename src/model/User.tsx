export interface User {
  id: number;
  name: string;
  age: number;
  isStudent: boolean;
}

// 페이지네이션 정보 포함
export interface UserList {
  users: User[];
  total: number; // 총 유저 수
  page: number; // 현재 페이지
  limit: number; // 페이지당 유저 수
}

// mockup data : 테스트하기 위한 가짜 데이터. ex. jsonplaceholer
export const mockUserListPage01: UserList = {
  users: [
    { id: 1, name: "John", age: 20, isStudent: true },
    { id: 2, name: "Jane", age: 21, isStudent: false },
    { id: 3, name: "Jim", age: 22, isStudent: true },
    { id: 4, name: "Jill", age: 23, isStudent: false },
    { id: 5, name: "Jack", age: 24, isStudent: true },
    { id: 6, name: "Jill", age: 25, isStudent: false },
    { id: 7, name: "Jack", age: 26, isStudent: true },
    { id: 8, name: "Jill", age: 27, isStudent: false },
    { id: 9, name: "Jack", age: 28, isStudent: true },
    { id: 10, name: "Jill", age: 29, isStudent: false },
  ],
  total: 102,
  page: 1,
  limit: 10,
};

export const mockUserListPage02: UserList = {
  users: [
    { id: 11, name: "John", age: 20, isStudent: true },
    { id: 12, name: "Jane", age: 21, isStudent: false },
    { id: 13, name: "Jim", age: 22, isStudent: true },
    { id: 14, name: "Jill", age: 23, isStudent: false },
    { id: 15, name: "Jack", age: 24, isStudent: true },
    { id: 16, name: "Jill", age: 25, isStudent: false },
    { id: 17, name: "Jack", age: 26, isStudent: true },
    { id: 18, name: "Jill", age: 27, isStudent: false },
    { id: 19, name: "Jack", age: 28, isStudent: true },
    { id: 20, name: "Jill", age: 29, isStudent: false },
  ],
  total: 102,
  page: 2,
  limit: 10,
};
