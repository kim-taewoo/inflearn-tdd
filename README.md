# 단위 테스트란? 
소스 코드의 개별 단위를 테스트 하여 사용할 준비가 되었는지 확인하는 테스트 방법. 간단하게 생각하면 메소드를 테스트하는 또다른 메소드라고 생각한다.

## 단위 테스트의 조건
1. 독립적이어야 한다. 즉, 다른 테스트에 의존하지 않는다. (의존하는 부분을 구현하기 까다로울 수 있고, 의존하는 부분의 상태에 따라 테스트의 결과가 달라질 수 있기 때문.)
1. 격리되어야 한다. 즉, Ajax, Axios, LocalStorage 등 테스트 대상이 의존하는 것을 다른 것으로 대체해야 한다.

## 단위 테스트를 하는 이유
1. 로컬환경에서 빠르게 자신의 코드가 정상적으로 작동하는지 테스트
1. 종속성이 있는 다른 클래스에서 버그가 나는 것을 테스트(예를 들어 두 가지 이상의 곳에서 공통적으로 사용하는 함수가 있을 때, 한 곳에서의 에러를 고치기 위해 함수를 수정했다가 다른 곳에서 다른 에러가 발생하는 악순환 발생이 가능하기 때문에, 테스트를 해가면서 고쳐야 한다.)

# Jest
## 기본 구조
1. `describe` 로 그룹화된 테스트들(`it` || `test`)이 있다. 

2. 각각의 테스트들은 `expect` 함수와 `matcher` 로 이루어져 있다.

3. `expect` 함수는 값을 테스트할 때 사용된다. 혼자 사용되기보다 항상 `matcher` 와 세트다.

4. `matcher` 는 다른 방법으로 값을 테스트하기 위해 사용한다.

## jest.fn()
Mock 함수를 생성하는 함수다. 단위테스트를 작성할 때, 해당 코드가 의존하는 부분을 가짜로 대체해주는 역할을 한다. 이 가짜함수는 상당히 유용해서, 어떤 테스트 함수 실행 중에 가짜 함수가 호출되었는지 말았는지, 어떤 인자를 가지고 호출되었는지 등등을 알 수 있다.

## beforeEach()
어떤 테스트 그룹에서 각각의 테스트가 실행되기 전에 공통적으로 실행되야 하는 부분이 있다면 해당 부분을 공통되게 작동하게 할 수 있다.

# TDD
1. 해야할 일을 생각하고,
2. 단위 테스트를 작성한 뒤
3. 테스트 코드에 대응하는 실제 코드를 작성한다.
