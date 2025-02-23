"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// 使用 require 导入 bcrypt，避免 TypeScript 报错
const bcrypt = require('bcrypt');
// 定义 Schema
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[eE][dD][uU]$/, // 仅允许 .edu 邮箱
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    university: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'University',
        required: true,
    },
    club_leaderships: {
        type: Map,
        of: String, // key: club name, value: position
        required: true,
    }
}, { timestamps: true });
// **密码加密（Pre-save Hook）**
// userSchema.pre<IUser>('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });
// **密码验证方法**
userSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return bcrypt.compare(candidatePassword, this.password);
    });
};
// 创建模型
const User = mongoose_1.default.model('User', userSchema);
// **示例: 创建用户**
const createUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new User({
            email: 'student@university.edu',
            password: 'securepassword123',
            firstName: 'Alice',
            lastName: 'Smith',
            university: new mongoose_1.default.Types.ObjectId(), // 这里需要真实 University ID
            club_leaderships: {
                'AI Club': 'President',
                'Robotics Society': 'Vice President'
            }
        });
        yield newUser.save();
        console.log('User created successfully!');
    }
    catch (error) {
        console.error('Error creating user:', error);
    }
});
// 调用创建用户函数
createUser();
exports.default = User;
