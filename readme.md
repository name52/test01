# 테스트01
---
## case1: git 없이 작업한 로컬프로젝트 깃허브에 올리기
(전제): 내가 사용할 컴퓨터에 git 설치 되어있고,  
(전제): git 환경설정 되어있고(config user.name ...)  
(전제): ssh 도 설정 되어있는 상태  

### <로컬작업 깃사용한다고 알리기>
- step1. 내 작업 프로젝트 폴더로 이동  
- step2. 해당 프로젝트 폴더에서 깃 사용한다고 알림 (`git init`)  
- step3. 해당 모든 프로젝트 파일 add 해줌 (`git add .`)  
- step4. 해당 수정내역 commit 남기 (`git commit -m 'Init 깃 이전작업들')  
- step5. 계속 이어서 작업(본인의 기준대로 방명록커밋 남기기)  
### <깃허브올리기>
- step6. 깃허브에 빈(깨끗한) 레파지토리 생성  
- step7. 원격 깃허브 저장소랑 로컬 저장소랑 연결하기(`git remote add origin <본인의 깃 레파지토리 주소>` )  
- step8. 로컬 브랜치가 master 라면 main으로 변경 (`git branch -M main` )  
- step9. 원격 저장소(origin) main 브랜치에 로컬 main 브랜치 push (`git push -u origin main`)  
- step10. 깃허브 들어가서 코드가 잘 올라갔는지 확인~  
