# js-study20230724
# 컨트롤+쉬프트+p >약어로 래핑

### ajax 실습시 JSON Server 설치(가상 Rest Api)
```shell script
$ mkdir json-server-exam && cd json-server-exam
$ npm init -y
$ npm install json-server —D
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
`$ npm start`로 서버실행

—