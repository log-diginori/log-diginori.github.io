# PYCON 2023
::: tip 
다시
우리
피똥
:::

![start](https://user-images.githubusercontent.com/10396850/260189097-33b34f86-8904-4829-ba9f-0cd48bf93838.jpeg)
- 양일권에 한하여 현장 등록도 가능합니다. 

### 우리 파이썬의 꼬꼬마 시절
![kkokko](https://user-images.githubusercontent.com/10396850/260189167-5806c9cf-9304-4175-b8c7-24175ad74a31.jpeg)
- 2000년 한국 오프라인 첫모임에서 피똥 ... 등등에서 강해 보이는 파이썬으로
- v2.4 에서 CjKcodecs 와 decoretor 
- 파이썬으로 하늘을 나는법

### 러스트 파이썬
- Jeong YunWon - https://github.com/youknowone
``` bash
# https://rustpython.github.io/
$ cargo install --git https://github.com/RustPython/RustPython
```
[rustPytho](https://user-images.githubusercontent.com/10396850/260189197-296a1674-7806-4174-b6b3-95d6fb161310.jpeg)
- ( 2016.RusyPython + 2017.RsPython) -> 2018.RusyPython
- 느린 개발
- 파이썬 구현체는 10개가 넘는다 c, python ... + rs
- 경쟁, 모방하며 언어가 성장한다
- CPython 말고 다른 구현체를 써본적인 있는가? PyPy, Graal, Micro ...
- 피브(pip) 이렇게 발음하는 거구나 ㅎ
- 그렇다면 rustPython 의 자리는 어딘가? 그럼에도 불가하고 ~ ( 웹 브라우저 데모, )
- Ruff(러프) - 소스코드를 분석하여 오류룰 표시해주는 정적분석 ... Flake8 보다 빠르다.
- [Ruff](https://beta.ruff.rs/docs/) - flake + pydocstyle + Pylint(일부) + Black(진행중)
- Pylyzer - 엄청나게 빠른 파이썬 정석 분석기, type checker, mypy/pyright 와 비슷 rs 로 개발