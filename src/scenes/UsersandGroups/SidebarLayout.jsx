const SidebarLayout = () => {
  const [selectedContent, setSelectedContent] = useState("Group Hierarchy"); // Default content

  // Sidebar menu items
  const menuItems = [
    { text: "Group Hierarchy", component: <GroupHierarchy /> },
    { text: "User List", component: <UserList /> },
    // Add more items if needed
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => setSelectedContent(item.text)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#f4f6f8", height: "100vh" }}
      >
        {/* Dynamically Rendered Content */}
        {menuItems.find((item) => item.text === selectedContent)?.component || (
          <h1>Content not found</h1>
        )}
      </Box>
    </Box>
  );
};

export default SidebarLayout;
