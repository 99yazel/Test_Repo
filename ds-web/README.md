# pikurate-ds-web

pikurate design system for web.

## Install

`npm install --save @pikurate/ds-web`

## How To Use

```
  import { Button, Icon } from '@pikurate/ds-web';

  const Example = () => (
    <div>
      <Button theme="active" onClick={() => {}}>
        버튼 <Icon icon="check_white" size="4rem" />
      </Button>
    </div>
  )
```

### How to Develop

#### setup project

[Pikurate Design System project](https://gitlab.com/pikurate/ds-web.git)

`git clone https://gitlab.com/pikurate/ds-web.git`

`npm install`

`npm run sb`

### build

`yarn build`

배포 전에는 반드시 빌드를 하도록 합시다.

- 현재 배포된 서버는 핸리의 개인 계정이 연동된 넷플리파이 계정에 연동되어 있습니다.
- build-sb 커맨드를 수정하지 마시기 바랍니다.
- netlify 에서 사용중입니다.

#### 배포하기

`yarn login`

`yarn publish --access public`

---

> Author : brady

> Data: 22/05/03

### 스토리북 작성방법

1. 이 프로젝트는 디자인 시스템 구축 및 테스트 활용을 위해서 개발되었습니다.
2. 참고한 레포지토리는 codeacademy 의 gamut design system 입니다.
   [🚀링크](https://github.com/Codecademy/gamut)
3. 모든 컴포넌트는 `src/Component` 에 배치합니다.
4. 모든 스토리는 `stories` 폴더에 배치합니다.
5. 스토리의 구분은 다음과 같습니다.

   ```
   "@Legacy", // 레거시 파일들 입니다.
   "Foundations", // 디자인 시스템의 근본이 되는 친구들 입니다.
   "Typography", // 타이포
   "Layouts", // 레이아웃
   "Atoms", // 원자단위 컴포넌트 (버튼, 카드 등)
   "Molecules", // 분자단위 컴포넌트 (원자 조합 컴포넌트)
   "Organisms", // 조직단위 컴포넌트 (폼, 리스트, 테이블 등)
   "Pages", // 페이지 화면
   "Brand", // 브랜드 관련 컴포넌트 (아바타, 로고 등등)
   "Hooks", // 테스트 위한 Hooks 컴포넌트
   ```

6. 각 컴포넌트 단위 별 배치의 기준은 다음을 따랐습니다.

   ```
   .Atom
   ├── About.stories.mdx
   ├── Animation.examples.tsx
   ├── Animation.stories.mdx
   ├── Badge.stories.mdx
   ├── BetaSticker.stories.mdx
   ├── Button
   │   ├── examples.tsx
   │   └── index.stories.mdx
   ├── ButtonDeprecated
   │   ├── helpers.tsx
   │   └── index.stories.mdx
   ├── Card.stories.mdx
   ├── CardDeprecated.stories.mdx
   ├── Drawer.stories.mdx
   ├── FloatingCard.stories.mdx
   ├── FocusTrap.stories.mdx
   ├── FormElements
   │   ├── About.stories.mdx
   │   ├── Form.stories.mdx
   │   ├── FormGroup.stories.mdx
   │   ├── FormGroupDescription.stories.mdx
   │   └── FormGroupLabel.stories.mdx
   ├── FormInputs
   │   ├── About.stories.mdx
   │   ├── Checkbox.stories.mdx
   │   ├── Input.stories.mdx
   │   ├── Radio.stories.mdx
   │   ├── RadioGroup.stories.mdx
   │   ├── Select.stories.mdx
   │   ├── SelectDropdown.stories.mdx
   │   ├── TextArea.stories.mdx
   │   └── examples.tsx
   ├── HighlightedText.stories.mdx
   ├── Icons
   │   ├── About.stories.mdx
   │   ├── Mini.stories.mdx
   │   ├── Regular.stories.mdx
   │   └── constants.tsx
   ├── Illustrations.stories.mdx
   ├── InputStepper.stories.mdx
   ├── Loaders
   │   ├── Loading.stories.mdx
   │   └── Shimmer.stories.mdx
   ├── Logo.stories.mdx
   ├── LogoFromSkillsoft
   │   └── LogoFromSkillsoft.stories.mdx
   ├── Patterns.stories.mdx
   ├── PopoverContainer
   │   ├── examples.tsx
   │   └── index.stories.mdx
   ├── ProLabel.stories.mdx
   ├── ProgressBar
   │   ├── constants.tsx
   │   └── index.stories.mdx
   ├── RadialProgress.stories.mdx
   ├── SkipToContent.stories.mdx
   ├── Spinner.stories.mdx
   ├── Toggle.examples.tsx
   ├── Toggle.stories.mdx
   ├── ToolTip.examples.tsx
   └── ToolTip.stories.mdx
   ```

   ```
   .Molecules
    ├── About.stories.mdx
    ├── Accordion.stories.mdx
    ├── AccordionButton.stories.mdx
    ├── Alert
    │   ├── constants.tsx
    │   └── index.stories.mdx
    ├── AppBar.stories.mdx
    ├── AppHeader
    │   ├── About.stories.mdx
    │   ├── AppHeader.stories.mdx
    │   ├── AppHeaderDropdown.stories.mdx
    │   ├── AppHeaderLink.stories.mdx
    │   ├── AppHeaderLinkMobile.stories.mdx
    │   ├── AppHeaderLogo.stories.mdx
    │   ├── AppHeaderMainMenuMobile.stories.mdx
    │   ├── AppHeaderMobile.stories.mdx
    │   ├── AppHeaderSubMenuMobile.stories.mdx
    │   └── MockAppHeaderElements.tsx
    ├── Banner.stories.mdx
    ├── Breadcrumbs.stories.mdx
    ├── Coachmark
    │   ├── Coachmark.examples.tsx
    │   └── index.stories.mdx
    ├── CurriculumCard.stories.mdx
    ├── DropdownButton
    │   └── index.stories.mdx
    ├── EmptySection.stories.mdx
    ├── ErrorContents.stories.mdx
    ├── Flyout.stories.mdx
    ├── GlobalFooter.stories.mdx
    ├── Header.stories.mdx
    ├── HorizontalScrollMenu
    │   ├── HorizontalScrollMenu.examples.tsx
    │   └── index.stories.mdx
    ├── InfoCard.stories.mdx
    ├── Interstitial.stories.mdx
    ├── ListSection.stories.mdx
    ├── Menu
    │   ├── Menu.examples.tsx
    │   ├── MenuItem.stories.mdx
    │   ├── MenuSeparator.stories.mdx
    │   └── index.stories.mdx
    ├── Modals
    │   ├── About.stories.mdx
    │   ├── Dialog.stories.mdx
    │   ├── Modal.stories.mdx
    │   ├── ModalDeprecated.stories.mdx
    │   └── Overlay.stories.mdx
    ├── NotificationList.stories.mdx
    ├── PageSection.stories.mdx
    ├── Pagination
    │   ├── Pagination.examples.tsx
    │   └── index.stories.mdx
    ├── PausableImage.stories.mdx
    ├── Popover
    │   ├── Popover.examples.tsx
    │   └── index.stories.mdx
    ├── SocialMediaSharing.stories.mdx
    ├── Tabs
    │   ├── Tabs.examples.tsx
    │   └── index.stories.mdx
    ├── TabsExperimental
    │   ├── ExampleCard.tsx
    │   └── index.stories.mdx
    ├── Toast.stories.mdx
    ├── Toaster.example.tsx
    ├── Toaster.stories.mdx
    ├── Truncate.stories.mdx
    └── Video.stories.mdx

   ```

   ```
    .Organisms
    ├── About.stories.mdx
    ├── ConnectedForm
    │   ├── About.stories.mdx
    │   ├── ConnectedForm.examples.tsx
    │   ├── ConnectedForm.stories.mdx
    │   ├── ConnectedFormGroup.examples.tsx
    │   ├── ConnectedFormGroup.stories.mdx
    │   ├── ConnectedFormInputs.stories.mdx
    │   ├── SubmitButton.examples.tsx
    │   ├── SubmitButton.stories.mdx
    │   └── utils.tsx
    ├── GlobalHeader.stories.mdx
    ├── GlobalPage.stories.mdx
    ├── GridForm.stories.mdx
    ├── LayoutMenu.stories.mdx
    ├── Lists & Tables
    │   ├── About.stories.mdx
    │   ├── DataList.stories.mdx
    │   ├── DataTable.stories.mdx
    │   ├── List
    │   │   ├── List.examples.tsx
    │   │   └── index.stories.mdx
    │   └── examples.tsx
    ├── Markdown
    │   ├── examples.tsx
    │   ├── index.stories.mdx
    │   └── markdown-example.md
    ├── PageAlerts
    │   ├── PageAlerts.example.tsx
    │   └── index.stories.mdx
    └── examples.tsx

   ```
