// Access control functions
const userIsAny = ({ authentication: { item: user } }) => Boolean(user);
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.state === 'admin');
const userOwnsItem = ({ authentication: { item: user } }) => {
    if (!user) {
        return false;
    }
    return { id: user.id };
};

const userIsAdminOrOwner = auth => {
    const isAdmin = access.userIsAdmin(auth);
    const isOwner = access.userOwnsItem(auth);
    return isAdmin ? isAdmin : isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner, userIsAny };

module.exports = access;