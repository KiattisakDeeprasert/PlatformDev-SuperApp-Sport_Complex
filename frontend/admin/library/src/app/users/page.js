"use strict";
"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserPage;
var react_1 = require("react");
var UserForm_1 = __importDefault(require("../../components/Users/UserForm"));
var UserTable_1 = __importDefault(require("../../components/Users/UserTable"));
var apiUrl = "http://localhost:8082/api/users";
var fetchUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch(apiUrl)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                return [2 /*return*/, result.map(function (user) { return ({
                        id: user._id,
                        email: user.email,
                        username: user.username,
                    }); })];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [2 /*return*/, []];
            case 4: return [2 /*return*/];
        }
    });
}); };
function UserPage() {
    var _this = this;
    var _a = (0, react_1.useState)([]), users = _a[0], setUsers = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(null), editingUser = _c[0], setEditingUser = _c[1];
    var _d = (0, react_1.useState)(false), isFormOpen = _d[0], setIsFormOpen = _d[1];
    (0, react_1.useEffect)(function () {
        fetchUsers().then(function (data) {
            setUsers(data);
            setLoading(false);
        });
    }, []);
    var handleCreate = function () {
        setEditingUser(null);
        setIsFormOpen(true);
    };
    var handleEdit = function (user) {
        setEditingUser(user);
        setIsFormOpen(true);
    };
    var handleDelete = function (userId) { return __awaiter(_this, void 0, void 0, function () {
        var response, errorText, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!confirm("Are you sure you want to delete this User?")) return [3 /*break*/, 7];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, fetch("".concat(apiUrl, "/").concat(userId), {
                            method: "DELETE",
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    setUsers(users.filter(function (user) { return user.id !== userId; }));
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.text()];
                case 4:
                    errorText = _a.sent();
                    console.error("Failed to delete user: ".concat(errorText));
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.error("Failed to delete user:", error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var handleFormSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var isUpdate, url, method, response, result_1, errorText, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 6, , 7]);
                    isUpdate = !!data.id;
                    url = isUpdate
                        ? "".concat(apiUrl, "/").concat(data.id)
                        : "http://localhost:8082/api/users/register";
                    method = isUpdate ? "PATCH" : "POST";
                    return [4 /*yield*/, fetch(url, {
                            method: method,
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(data),
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, response.json()];
                case 2:
                    result_1 = _a.sent();
                    if (result_1 && result_1.data) {
                        if (isUpdate) {
                            setUsers(function (prevUsers) {
                                return Array.isArray(prevUsers)
                                    ? prevUsers.map(function (c) {
                                        return c.id === result_1.data.id ? result_1.data : c;
                                    })
                                    : [];
                            });
                        }
                        else {
                            setUsers(function (prevUsers) {
                                return Array.isArray(prevUsers)
                                    ? __spreadArray(__spreadArray([], prevUsers, true), [result_1.data], false) : [result_1.data];
                            });
                        }
                    }
                    setIsFormOpen(false);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.text()];
                case 4:
                    errorText = _a.sent();
                    console.error("Failed to submit user: ".concat(errorText));
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_3 = _a.sent();
                    console.error("Failed to submit user:", error_3);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    if (loading) {
        return React.createElement("div", null, "Loading...");
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: handleCreate, className: "bg-blue-500 text-white px-4 py-2 rounded mb-4" }, "Create New User"),
        React.createElement("div", { className: "flex flex-wrap justify-start" }, users && users.length > 0 ? (React.createElement("div", { className: "flex flex-wrap justify-start" }, users.map(function (user) { return (React.createElement(UserTable_1.default, { key: user.id, user: user, onEdit: handleEdit, onDelete: handleDelete })); }))) : (React.createElement("div", null, "No users found"))),
        isFormOpen && (React.createElement(UserForm_1.default, { user: editingUser, onSubmit: handleFormSubmit, onClose: function () { return setIsFormOpen(false); } }))));
}
