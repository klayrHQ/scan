import {
  ControlsIcon,
  LinkIcon,
  CogIcon,
  UlistIcon,
  ThListIcon,
  InfoOutlineIcon, DesktopIcon, EqualIcon, MasterDetailIcon, MenuIcon, DashboardIcon, TagIcon
} from "@sanity/icons";
import {sliceDocumentNames} from "./schemas/slices";

export const sanityDeskStructure = (S: any) =>
  S.list()
    .title("Liskscan")
    .items([
      S.listItem()
        .title("Liskscan settings")
        .icon(ControlsIcon)
        .child(
          S.list()
            .title("Settings")
            .items([
              S.listItem()
                .title("Settings")
                .icon(CogIcon)
                .child(
                  S.document().schemaType("settings").documentId("settings"),
                ),
              // S.listItem()
              //   .title("Navigation")
              //   .icon(LinkIcon)
              //   .child(
              //     S.documentTypeList("topNavigation").title("Topbar Navigation"),
              //   ),
              S.listItem()
                .title("Info bar")
                .icon(InfoOutlineIcon)
                .child(S.document().schemaType("infobar").documentId("infobar")),
              S.listItem()
                .title("Main Menu")
                .icon(MenuIcon)
                .child(S.document().schemaType("menu").documentId("menu")),
              S.listItem()
                .title("Footer")
                .icon(UlistIcon)
                .child(S.document().schemaType("footer").documentId("footer")),
            ]),
        ),
      S.listItem()
        .title("Pages")
        .icon(DesktopIcon)
        .child(
          S.list()
            .title("Content Management")
            .items([
              S.listItem()
                .title("Content Pages")
                .icon(MasterDetailIcon)
                .child(S.documentTypeList("pages").title("Pages")),
              // S.listItem()
              //   .title("Functional Pages")
              //   .icon(RobotIcon)
              //   .child(
              //     S.list()
              //       .title("Functional Pages")
              //       .items([
              //         ...functionalPageNames.map((name) => {
              //           const icon = functionalPageIcons.find(
              //             (iconName) => iconName.name === name,
              //           );
              //           return S.listItem()
              //             .title(icon?.title || name)
              //             .icon(icon?.icon ? icon.icon : DocumentTextIcon)
              //             .child(
              //               S.document().schemaType(name).documentId(name),
              //             );
              //         }),
              //       ]),
              //   ),
              S.divider(),
              S.listItem()
                .title("Content")
                .icon(EqualIcon)
                .child(
                  S.documentList()
                    .title(`Content slices`)
                    .filter(
                      sliceDocumentNames
                        .map((name) => `_type == "${name}"`)
                        .join("||"),
                    ),
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Data Tables")
        .icon(ThListIcon)
        .child(S.documentTypeList("tables").title("All Tables")),
              // S.listItem()
              //   .title("Functional Pages")
              //   .icon(RobotIcon)
              //   .child(
              //     S.list()
              //       .title("Functional Pages")
              //       .items([
              //         ...functionalPageNames.map((name) => {
              //           const icon = functionalPageIcons.find(
              //             (iconName) => iconName.name === name,
              //           );
              //           return S.listItem()
              //             .title(icon?.title || name)
              //             .icon(icon?.icon ? icon.icon : DocumentTextIcon)
              //             .child(
              //               S.document().schemaType(name).documentId(name),
              //             );
              //         }),
              //       ]),
              //   ),
              // S.divider(),
      //         S.listItem()
      //           .title("Content")
      //           .icon(EqualIcon)
      //           .child(
      //             S.documentList()
      //               .title(`Content slices`)
      //               .filter(
      //                 sliceDocumentNames
      //                   .map((name) => `_type == "${name}"`)
      //                   .join("||"),
      //               ),
      //           ),
      //       ]),
      //   ),
      // S.divider(),
      // ...S.documentTypeListItems().filter(
      //   (listItem: any) =>
      //     !["topNavigation", "pages", "footer", ...sliceDocumentNames].includes(
      //       listItem.getId(),
      //     ),
      // ),
      S.listItem()
        .title("News")
        .icon(DashboardIcon)
        .child(
          S.list()
            .title("News")
            .items([
              S.listItem()
                .title("News Items")
                .icon(DashboardIcon)
                .child(S.documentTypeList("news").title("All Items")),
              S.listItem()
                .title("Categories")
                .icon(TagIcon)
                .child(S.documentTypeList("newsCategories").title("All Categories")),
            ]),
        ),
    ]);
