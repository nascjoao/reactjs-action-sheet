import { Drawer } from "vaul";
import "./styles.css";
import React from "react";
import cx from "classnames";

interface ActionProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    destructive?: boolean;
}

export function Action({
    children,
    className,
    destructive,
    ...rest
}: ActionProps) {
    return (
        <button
            data-vaul-no-drag
            className={cx(
                "ras-action",
                destructive && "ras-destructive",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

type DrawerContent = Parameters<(typeof Drawer)["Content"]>[0];

interface ActionSheetProps extends DrawerContent {
    title?: string;
    actions: React.ReactElement[];
    children: React.ReactNode;
    dismissText?: string;
    dismissIsDestructive?: boolean;
}

export default function ActionSheet({
    title,
    actions,
    children,
    className,
    dismissText = "Cancel",
    dismissIsDestructive,
    ...rest
}: ActionSheetProps) {
    return (
        <Drawer.Root>
            <Drawer.Trigger asChild={React.isValidElement(children)}>
                {children}
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content
                    className={cx("ras-content", className)}
                    {...rest}
                >
                    <div className={"ras-container"} data-vaul-no-drag>
                        <div className={"ras-actions"} data-vaul-no-drag>
                            {title && (
                                <Drawer.Title
                                    data-vaul-no-drag
                                    className={"ras-title"}
                                >
                                    {title}
                                </Drawer.Title>
                            )}
                            {actions.map((action, index) =>
                                React.cloneElement(action, {
                                    key: index,
                                })
                            )}
                        </div>
                        <Drawer.Close asChild>
                            <Action
                                className={"ras-cancel"}
                                destructive={dismissIsDestructive}
                            >
                                {dismissText}
                            </Action>
                        </Drawer.Close>
                    </div>
                </Drawer.Content>
                <Drawer.Overlay className={"ras-overlay"} />
            </Drawer.Portal>
        </Drawer.Root>
    );
}
