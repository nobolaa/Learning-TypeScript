enum Roles{
    User,
    Admin,
    SuperAdmin
}
console.log(Roles.Admin);

enum Roles2{
    User = 1,
    Admin,
    SuperAdmin
}
console.log(Roles2.Admin);

enum Roles3{
    User = 'USER',
    Admin = 'ADMIN',
    SuperAdmin = 'SUPERADMIN'
}
console.log(Roles3.Admin);

const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.Admin);