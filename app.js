const express = require('express');
const app = express();
app.use(express.json());
app.listen(3001, () => {
  console.log('http://localhost:3001');
});
app.get('/', (req, res) => {
  res.send('Hello Express!!!!!!!!!!!');
});

// 사용자 정보를 담을 배열
const users = [];

// 회원가입
app.post('/user/register', (req, res) => {
    //res.body: { id: 'useradsf', name: '테스트1', password: 'qwer' }
    // json 변수 매핑
  const { id, password, name } = req.body;

//   id= "abc";     // error
  console.log(req.body);
  console.log("id: " + id);

  // TODO id, password, name이 있는지 체크한다.
  if (!id || !password || !name) {
    res.status(400).send({ message: 'id, password, name은 필수입력 사항입니다.' });
    return;
  }
  
  // TODO id는 중복되지 않도록한다.
  const user = users.find((user) => user.id === id);
  if (user) {
    res.status(400).send({ message: '이미 존재하는 아이디입니다.' });
    return;
  }

  // TODO 사용자를 추가한다.
  console.log("users.length: " + users.length)

  users.push(req.body);

  console.log("users.length: " + users.length)
  console.log("users[0]: " + users[0].id);
  res.send({ message: '사용자를 등록했습니다.' });
});