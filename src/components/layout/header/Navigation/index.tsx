'use client';

import React, { useCallback, useRef, useState } from 'react';
import { INavigationItem, INavigationItemWithKey, NAVIGATION_ITEMS_WITH_KEYS } from '@/config/nav';
// import {NavigationItem} from '@/components/layout/header';
// import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/Popover/Content';
import { useHover } from '@/hooks/useHover';
import { useDebounce } from '@uidotdev/usehooks';
// import {
//     NavigationMenu,
//     NavigationMenuContent,
//     NavigationMenuItem,
//     NavigationMenuLink,
//     NavigationMenuList,
//     NavigationMenuTrigger,
//     navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

import cls from './index.module.scss';
import Link from 'next/link';
// import { Popover } from '@/components/ui/Popover';

export const Navigation: React.FC = () => {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  // const renderNavigationItems = useCallback((list: INavigationItemWithKey[]) => {
  //     return list.map(nav => {
  //         return (
  //             <NavigationMenuItem
  //                 key={nav.key}
  //             >
  //                 {nav.subItems?.length ? (
  //                     <>
  //                         <NavigationMenuTrigger>
  //                             <span className={navigationMenuTriggerStyle()}>
  //                                 {nav.title}
  //                             </span>
  //                         </NavigationMenuTrigger>
  //                         <NavigationMenuContent>
  //                             <ul className="flex flex-col">
  //                                 {
  //                                     nav.subItems.map(sub => (
  //                                         <li key={sub.key}>
  //                                             <Link
  //                                                 className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
  //                                                 href="/"
  //                                             >
  //                                                 {/*<Icons.logo className="h-6 w-6" />*/}
  //                                                 <div className="mb-2 mt-4 text-lg font-medium">
  //                                                     {sub.title}
  //                                                 </div>
  //                                                 {/*<p className="text-sm leading-tight text-muted-foreground">*/}
  //                                                 {/*    Beautifully designed components built with Radix UI and*/}
  //                                                 {/*    Tailwind CSS.*/}
  //                                                 {/*</p>*/}
  //                                             </Link>
  //                                         </li>
  //                                     ))
  //                                 }
  //
  //                                 {/*<ListItem href="/docs" title="Introduction">*/}
  //                                 {/*    Re-usable components built using Radix UI and Tailwind CSS.*/}
  //                                 {/*</ListItem>*/}
  //                                 {/*<ListItem href="/docs/installation" title="Installation">*/}
  //                                 {/*    How to install dependencies and structure your app.*/}
  //                                 {/*</ListItem>*/}
  //                                 {/*<ListItem href="/docs/primitives/typography" title="Typography">*/}
  //                                 {/*    Styles for headings, paragraphs, lists...etc*/}
  //                                 {/*</ListItem>*/}
  //                             </ul>
  //                         </NavigationMenuContent>
  //                     </>
  //                 ) : (
  //                     <Link href={nav.href!} passHref>
  //                         <NavigationMenuLink className={navigationMenuTriggerStyle()}>
  //                             {nav.title}
  //                         </NavigationMenuLink>
  //                     </Link>
  //                 )}
  //             </NavigationMenuItem>
  //         )
  //     })
  // }, [hoveredKey]);

  return (
    <div>
      {/*<Popover.Root>*/}
      {/*  <Popover.Trigger type="hover">adaa</Popover.Trigger>*/}
      {/*  <Popover.Content>adssaasddasda</Popover.Content>*/}
      {/*</Popover.Root>*/}
    </div>
    // <NavigationMenu>
    //     <NavigationMenuList>
    //         {renderNavigationItems(NAVIGATION_ITEMS_WITH_KEYS)}
    //     </NavigationMenuList>
    // </NavigationMenu>
  );
};
