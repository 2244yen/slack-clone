import React from "react";
import {
  Header,
  Menu,
  Segment,
  Sidebar,
  Dropdown,
  Icon
} from "semantic-ui-react";
import styles from './SlidePanel.module.css';

const VerticalSidebar = ({ animation, direction, visible, activeItem }: any) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="thin"
  >
    <Menu.Item>
      <Dropdown text="Browse Slack">
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
          <Dropdown.Item text="Open..." description="ctrl + o" />
          <Dropdown.Item text="Save as..." description="ctrl + s" />
          <Dropdown.Item text="Rename" description="ctrl + r" />
          <Dropdown.Item text="Make a copy" />
          <Dropdown.Item icon="folder" text="Move to folder" />
          <Dropdown.Item icon="trash" text="Move to trash" />
          <Dropdown.Divider />
          <Dropdown.Item text="Download As..." />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
    <Menu.Item>
      Home
      <Menu.Menu>
        <Menu.Item
          name="search"
        >
          Search
        </Menu.Item>
        <Menu.Item
          name="add"
        >
          Add
        </Menu.Item>
        <Menu.Item
          name="about"
        >
          Remove
        </Menu.Item>
      </Menu.Menu>
    </Menu.Item>
  </Sidebar>
);

function exampleReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_ANIMATION":
      return { ...state, animation: action.animation, visible: !state.visible };
    case "CHANGE_DIMMED":
      return { ...state, dimmed: action.dimmed };
    case "CHANGE_DIRECTION":
      return { ...state, direction: action.direction, visible: false };
    default:
      throw new Error();
  }
}

function SlidePanel() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: "overlay",
    direction: "left",
    dimmed: false,
    visible: true,
  });

  const { animation, dimmed, direction, visible } = state;

  // overflowY: "auto"
  return (
    <div>
      <Sidebar.Pushable as={Segment} style={{ height: '100vh', overflowX: 'hidden' }}>
        <VerticalSidebar
          animation={animation}
          direction={direction}
          visible={visible}
        />

        <Sidebar.Pusher dimmed={dimmed && visible} className={styles.pushing}>
          <Segment basic>
            <Header as="h3">Application Content</Header>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default SlidePanel;
