export const mockMenus = [
  {
    id: "1",
    name: "system management",
    children: [
      {
        id: "2",
        name: "System Management",
        children: [
          {
            id: "3",
            name: "Systems",
            children: [
              { id: "4", name: "System Code", children: [] },
              { id: "5", name: "Code Registration", children: [] },
              { id: "6", name: "Code Registration - 2", children: [] },
              { id: "7", name: "Properties", children: [] },
              {
                id: "8",
                name: "Menus",
                children: [{ id: "9", name: "Menu Registration", children: [] }],
              },
              {
                id: "10",
                name: "API List",
                children: [
                  { id: "11", name: "API Registration", children: [] },
                  { id: "12", name: "API Edit", children: [] },
                ],
              },
              {
                id: "13",
                name: "Users & Groups",
                children: [
                  {
                    id: "14",
                    name: "Users",
                    children: [
                      { id: "15", name: "User Account Registration", children: [] },
                    ],
                  },
                  {
                    id: "16",
                    name: "Groups",
                    children: [
                      { id: "17", name: "User Group Registration", children: [] },
                    ],
                  },
                ],
              },
              { id: "18", name: "사용자 승인", children: [] },
              { id: "19", name: "사용자 승인 상세", children: [] },
            ],
          },
        ],
      },
    ],
  },
];
