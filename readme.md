# 테스트01

```
👉---------기본적인 세팅
1. 깃 세팅(깃 설치 - 깃 사용자 설정 - ssh 키 등록(컴퓨터별로 한번만~!))
👉---------위의 기본적인 세팅이 완료 되고, 아래의 case 대로 설정을 마치면~~
작업: 내가 설정한 목표가 작업이 완료되면 commit 하면됨,
(탭 끝나고 커밋, 슬라이드 작업하고 커밋, 스크롤 작업하고 커밋)
git add -> git commit 의 반복~
오늘작업이 다 끝나면 깃허브에 push
👉---------확인확인
git pull을 받기 전에는 항상~ 
내 파일이 수정된게 있는지 확인~
pull 전에 fecth 부터 해서 변경된 내용 확인~
별다른 이상 없다면 git pull 받아서 작업 이어서 주욱~~ 

```
```
👉---------git 작업 순서
fetch - pull - (add) - commit - push
```


## case1: git 없이 작업한 로컬프로젝트 깃허브에 올리기
```
(전제): 내가 사용할 컴퓨터에 git 설치 되어있고,  
(전제): git 환경설정 되어있고(config user.name ...)  
(전제): ssh 도 설정 되어있는 상태  
```

### <로컬작업 깃사용한다고 알리기>
- step1. 내 작업 프로젝트 폴더로 이동  
- step2. 해당 프로젝트 폴더에서 깃 사용한다고 알림 (`git init`)  
- step3. 해당 모든 프로젝트 파일 add 해줌 (`git add .`)  
- step4. 해당 수정내역 commit 남기 (`git commit -m 'Init 깃 이전작업들'`)  
- step5. 계속 이어서 작업(본인의 기준대로 방명록커밋 남기기)  
### <깃허브올리기>
- step6. 깃허브에 빈(깨끗한) 레파지토리 생성  
- step7. 원격 깃허브 저장소랑 로컬 저장소랑 연결하기(`git remote add origin <본인의 깃 레파지토리 주소>` )  
- step8. 로컬 브랜치가 master 라면 main으로 변경 (`git branch -M main` )  
- step9. 원격 저장소(origin) main 브랜치에 로컬 main 브랜치 push (`git push -u origin main`) 
( cf: 해당 명령어를 입력했다면 그 이후에 작업한것을 push 하려면, `git push`만 입력해줘도 됨~~) 
- step10. 깃허브 들어가서 코드가 잘 올라갔는지 확인~  

## case2: 깃허브에 있는 프로젝트 폴더 내 로컬컴퓨터에 가져오기~(학원에서 잘 작업한 파일 깃허브에 올린거 집에서 다운받기: 집에는 해당 프로젝트 폴더 자체가 없는 상태)
```
(전제): 내가 사용할 컴퓨터에 git 설치 되어있고,  
(전제): git 환경설정 되어있고(config user.name ...)  
(전제): ssh 도 설정 되어있는 상태  
(전제): 프로젝트를 내 로컬 컴퓨터에 있는 폴더는 깨끗한 상태
```
### <가지고올 깃허브 레파지토리 찾기>
- step1. 깃허브 레파지토리로 이동
- step2. `code` 초록버튼 클릭 후 `ssh` 선택 후 해당 주소 복사  
### <vscode>
- step3. 깃허브 프로젝트 폴더를 담을 폴더 로컬에 만들어주기
- step4. 해당 로컬 프로젝트 폴더로 이동
- step5. 해당 주소 복제하기 `git clone <복사하신 깃허브 주소> .`
(cf: `git clone <복사하신 깃허브 주소> .` : 깃허브 폴더에 들어가 있는 파일들을 복제: 로컬에 프로젝트 폴더를 만들어야함)
(cf: `git clone <복사하신 깃허브 주소>` : 깃허브 폴더를 복제: 로컬에 프로젝트폴더를 담을 부모폴더쪽에서 clone 수행해야함)

## case3. 로컬과 깃허브 프로젝트 핀트 맞추기(학원에서 잘 작업한 파일 깃허브에 올린거 집에있는 깃프로젝트 폴더에 다운받기 or 집에서 작업한 파일 깃허브에 올린거 학원에 있는 깃 프로젝트 폴더에 다운받기)
```
(전제): 집에있는 프로젝트폴더는 이미 깃으로 관리되고 있는 상태
(전제): 집에있는 프로젝트폴더는 이미 깃허브랑 연결 되어있는 상태
(전제): 집에있는 프로젝트폴더는 이전에 깃허브에 push 한 이후 수정사항이 없는 상태(있어도 상관은 없지만, 충돌을 해결해야함: 왜? 집에 있는 파일은 수정이 없다라는 전제하에 토스받아서 학원에서 작업을 받은거니깐~~)
```
### 
- step1. 작업하고 있는 곳이 로컬 프로젝트 폴더 경로인지 확인
- step2. 현재 파일 변경사항 있는지 없는지 확인(`git status`)
- step3. 변경사항이 있다면 별도로 백업해놓고 해당 파일 지우기(`git restore 파일명`)
(변경사항이 있다고 `git add 파일명` -> `git commit ...` 하면 깃허브에 있는파일 받을때 충돌나서 해결해줘야함~)
- step4. 변경사항이 없다면 깃허브에 있는 변경사항 가져오기 (`git fetch`)
(하면, 몇개의 변경사항이 있는지 알려줌~)
- step5. 변경사항 내 로컬 프로젝트에 합치기 (`git pull`)
- step6. 최신 파일을 받았으니 이제 내 로컬에서 신나게~작업~~
