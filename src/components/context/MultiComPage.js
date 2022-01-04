function Page(props) {
    const user = props.user;
    const avatarSize = props.avatarSize;
    const content = <Feed user={user}/>;
    const topBar = (
        <NavigationBar>
            <Link href={user.permalink}>
                <Avatar user={user} size={avatarSize}/>
            </Link>
        </NavigationBar>
    );
    return (
        <PageLayout topBar={topBar} content={content}/>
    )
}