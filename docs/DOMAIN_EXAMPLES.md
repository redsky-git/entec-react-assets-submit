# 기업뱅킹 도메인 상세 구현 예제

이 문서는 금융권 기업뱅킹 프로젝트의 주요 도메인별 상세 구현 예제를 제공합니다.

---

## 목차

1. [계좌관리 도메인 상세 구현](#1-계좌관리-도메인-상세-구현)
2. [송금/이체 도메인 상세 구현](#2-송금이체-도메인-상세-구현)
3. [대출 도메인 상세 구현](#3-대출-도메인-상세-구현)
4. [공통 패턴 및 베스트 프랙티스](#4-공통-패턴-및-베스트-프랙티스)

---

## 1. 계좌관리 도메인 상세 구현

### 1.1 전체 구조

```
domains/account/
├── api/
│   └── url.ts
├── types/
│   └── index.ts
├── components/
│   ├── AccountCard.tsx
│   ├── TransactionItem.tsx
│   └── BalanceChart.tsx
├── pages/
│   ├── AccountList.tsx
│   ├── AccountDetail.tsx
│   └── TransactionHistory.tsx
├── store/
│   └── index.ts
└── router/
    └── index.tsx
```

### 1.2 타입 정의

```typescript
// domains/account/types/index.ts

export interface Account {
  accountId: string;
  accountNumber: string;
  accountName: string;
  accountType: 'checking' | 'savings' | 'deposit';
  balance: number;
  currency: string;
  status: 'active' | 'inactive' | 'suspended';
  openDate: string;
  lastTransactionDate: string;
}

export interface Transaction {
  transactionId: string;
  transactionDate: string;
  transactionType: 'deposit' | 'withdraw' | 'transfer';
  amount: number;
  balance: number;
  description: string;
  counterpartyName?: string;
  counterpartyAccount?: string;
}

export interface AccountListRequest {
  accountType?: string;
  status?: string;
  page?: number;
  size?: number;
}

export interface AccountListResponse {
  accounts: Account[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface TransactionHistoryRequest {
  accountId: string;
  startDate: string;
  endDate: string;
  transactionType?: string;
  page?: number;
  size?: number;
}

export interface TransactionHistoryResponse {
  transactions: Transaction[];
  totalCount: number;
  currentPage: number;
}
```

### 1.3 API URL 정의

```typescript
// domains/account/api/url.ts

const accountUrl = {
  // 계좌 관련
  ACCOUNT_LIST: '/api/v1/account/list',
  ACCOUNT_DETAIL: '/api/v1/account/detail',
  ACCOUNT_BALANCE: '/api/v1/account/balance',
  ACCOUNT_CREATE: '/api/v1/account/create',
  ACCOUNT_CLOSE: '/api/v1/account/close',
  
  // 거래 내역
  TRANSACTION_HISTORY: '/api/v1/account/transactions',
  TRANSACTION_DETAIL: '/api/v1/account/transaction/detail',
  
  // 통계
  ACCOUNT_STATISTICS: '/api/v1/account/statistics',
};

export default accountUrl;
```

### 1.4 Store 정의

```typescript
// domains/account/store/index.ts

import type { IActionObject, IRootState } from '@/app/types/store';
import url from '@/domains/account/api/url';

export interface IAccountStore<T = IRootState> {
  accountList: T;
  accountDetail: T;
  transactionHistory: T;
  selectedAccount: T;
  accountFilter: T;
}

const accountAction: IAccountStore<IActionObject> = {
  accountList: {
    actionType: 'accountStore/accountList',
    url: url.ACCOUNT_LIST,
  },
  accountDetail: {
    actionType: 'accountStore/accountDetail',
    url: url.ACCOUNT_DETAIL,
  },
  transactionHistory: {
    actionType: 'accountStore/transactionHistory',
    url: url.TRANSACTION_HISTORY,
  },
  selectedAccount: {
    actionType: 'accountStore/selectedAccount',
    // API 호출 없는 상태
  },
  accountFilter: {
    actionType: 'accountStore/accountFilter',
    // 필터 상태 관리
  },
};

export default accountAction;
```

### 1.5 컴포넌트 구현

#### AccountCard 컴포넌트

```typescript
// domains/account/components/AccountCard.tsx

import type { IComponent } from '@/app/types/common';
import { Badge } from '@/app/components/ui';
import type { Account } from '@/domains/account/types';

interface IAccountCardProps {
  account: Account;
  onClick?: (accountId: string) => void;
}

const AccountCard: IComponent<IAccountCardProps> = ({ account, onClick }) => {
  const getStatusBadge = (status: string) => {
    const statusMap = {
      active: { text: '정상', variant: 'success' },
      inactive: { text: '비활성', variant: 'secondary' },
      suspended: { text: '정지', variant: 'destructive' },
    };
    return statusMap[status] || statusMap.active;
  };

  const getAccountTypeText = (type: string) => {
    const typeMap = {
      checking: '입출금',
      savings: '저축예금',
      deposit: '정기예금',
    };
    return typeMap[type] || type;
  };

  const handleClick = () => {
    if (onClick) {
      onClick(account.accountId);
    }
  };

  const statusInfo = getStatusBadge(account.status);

  return (
    <div 
      className="account-card border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-lg">{account.accountName}</h3>
          <p className="text-sm text-gray-600">
            {$util.format.account(account.accountNumber)}
          </p>
        </div>
        <Badge variant={statusInfo.variant}>{statusInfo.text}</Badge>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">계좌구분</span>
          <span className="text-sm font-medium">
            {getAccountTypeText(account.accountType)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">잔액</span>
          <span className="text-lg font-bold text-primary">
            {$util.format.currency(account.balance)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">최근 거래일</span>
          <span className="text-sm">
            {$util.format.date(account.lastTransactionDate, 'YYYY.MM.DD')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
```

#### TransactionItem 컴포넌트

```typescript
// domains/account/components/TransactionItem.tsx

import type { IComponent } from '@/app/types/common';
import type { Transaction } from '@/domains/account/types';

interface ITransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: IComponent<ITransactionItemProps> = ({ transaction }) => {
  const getTransactionTypeInfo = (type: string) => {
    const typeMap = {
      deposit: { text: '입금', color: 'text-blue-600', sign: '+' },
      withdraw: { text: '출금', color: 'text-red-600', sign: '-' },
      transfer: { text: '이체', color: 'text-orange-600', sign: '-' },
    };
    return typeMap[type] || { text: type, color: 'text-gray-600', sign: '' };
  };

  const typeInfo = getTransactionTypeInfo(transaction.transactionType);

  return (
    <div className="transaction-item border-b py-4 hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-sm font-medium ${typeInfo.color}`}>
              {typeInfo.text}
            </span>
            <span className="text-xs text-gray-500">
              {$util.format.datetime(transaction.transactionDate)}
            </span>
          </div>
          
          <p className="text-sm font-medium mb-1">
            {transaction.description}
          </p>
          
          {transaction.counterpartyName && (
            <p className="text-xs text-gray-500">
              {transaction.counterpartyName}
              {transaction.counterpartyAccount && 
                ` (${$util.format.account(transaction.counterpartyAccount)})`
              }
            </p>
          )}
        </div>
        
        <div className="text-right ml-4">
          <p className={`text-lg font-bold ${typeInfo.color}`}>
            {typeInfo.sign}{$util.format.currency(transaction.amount)}
          </p>
          <p className="text-xs text-gray-500">
            잔액 {$util.format.currency(transaction.balance)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
```

### 1.6 페이지 구현

#### AccountList 페이지

```typescript
// domains/account/pages/AccountList.tsx

import type { IComponent } from '@/app/types/common';
import { useState, useEffect } from 'react';
import { useReduxAPI, useReduxState } from '@/app/hooks';
import { Button, Select, Spinner } from '@/app/components/ui';
import AccountCard from '@/domains/account/components/AccountCard';
import type { Account, AccountListRequest } from '@/domains/account/types';

const AccountList: IComponent = () => {
  const { data, fetch } = useReduxAPI<Account[]>('accountStore/accountList');
  const { setData: setSelectedAccount } = useReduxState('accountStore/selectedAccount');
  
  const [filter, setFilter] = useState<AccountListRequest>({
    accountType: 'all',
    status: 'active',
    page: 1,
    size: 20,
  });

  useEffect(() => {
    fetchAccounts();
  }, [filter]);

  const fetchAccounts = () => {
    fetch(filter);
  };

  const handleAccountClick = (accountId: string) => {
    const account = data.result?.find(acc => acc.accountId === accountId);
    if (account) {
      setSelectedAccount(account);
      window.$router.push(`/account/detail/${accountId}`);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilter(prev => ({
      ...prev,
      [key]: value,
      page: 1, // 필터 변경 시 첫 페이지로
    }));
  };

  if (data.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="w-12 h-12" />
      </div>
    );
  }

  if (data.error) {
    return (
      <div className="error-container p-8 text-center">
        <h2 className="text-xl font-bold text-red-600 mb-2">
          데이터 조회 실패
        </h2>
        <p className="text-gray-600 mb-4">{data.error.message}</p>
        <Button onClick={fetchAccounts}>다시 시도</Button>
      </div>
    );
  }

  return (
    <div className="account-list-page p-6">
      <div className="header mb-6">
        <h1 className="text-2xl font-bold mb-4">계좌 목록</h1>
        
        <div className="filters flex gap-4">
          <Select 
            value={filter.accountType}
            onChange={(e) => handleFilterChange('accountType', e.target.value)}
          >
            <option value="all">전체</option>
            <option value="checking">입출금</option>
            <option value="savings">저축예금</option>
            <option value="deposit">정기예금</option>
          </Select>
          
          <Select
            value={filter.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="all">전체</option>
            <option value="active">정상</option>
            <option value="inactive">비활성</option>
            <option value="suspended">정지</option>
          </Select>
          
          <Button onClick={fetchAccounts} variant="outline">
            새로고침
          </Button>
        </div>
      </div>

      <div className="account-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.result && data.result.length > 0 ? (
          data.result.map(account => (
            <AccountCard
              key={account.accountId}
              account={account}
              onClick={handleAccountClick}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            조회된 계좌가 없습니다.
          </div>
        )}
      </div>

      {/* 페이지네이션 */}
      {data.result && data.result.length > 0 && (
        <div className="pagination mt-6 flex justify-center gap-2">
          {/* 페이지네이션 구현 */}
        </div>
      )}
    </div>
  );
};

export default AccountList;
```

#### AccountDetail 페이지

```typescript
// domains/account/pages/AccountDetail.tsx

import type { IComponent } from '@/app/types/common';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useReduxAPI } from '@/app/hooks';
import { Button, Spinner, Tabs } from '@/app/components/ui';
import type { Account } from '@/domains/account/types';
import TransactionHistory from './TransactionHistory';

const AccountDetail: IComponent = () => {
  const { accountId } = useParams<{ accountId: string }>();
  const { data, fetch } = useReduxAPI<Account>('accountStore/accountDetail');
  const [activeTab, setActiveTab] = useState('info');

  useEffect(() => {
    if (accountId) {
      fetch({ accountId });
    }
  }, [accountId]);

  const handleTransferClick = () => {
    window.$router.push('/transfer/create', {
      state: { fromAccount: data.result?.accountNumber },
    });
  };

  if (data.loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="w-12 h-12" />
      </div>
    );
  }

  if (data.error || !data.result) {
    return (
      <div className="error-container p-8 text-center">
        <h2 className="text-xl font-bold text-red-600">
          계좌 정보를 불러올 수 없습니다
        </h2>
      </div>
    );
  }

  const account = data.result;

  return (
    <div className="account-detail-page p-6">
      {/* Header */}
      <div className="header mb-6">
        <Button 
          variant="ghost" 
          onClick={() => window.$router.goBack()}
        >
          ← 뒤로
        </Button>
      </div>

      {/* Account Summary */}
      <div className="account-summary bg-primary text-white rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">{account.accountName}</h2>
        <p className="text-sm opacity-90 mb-4">
          {$util.format.account(account.accountNumber)}
        </p>
        
        <div className="balance">
          <p className="text-sm opacity-90">잔액</p>
          <p className="text-3xl font-bold">
            {$util.format.currency(account.balance)}
          </p>
        </div>
        
        <div className="actions mt-6 flex gap-3">
          <Button variant="secondary" onClick={handleTransferClick}>
            송금
          </Button>
          <Button variant="secondary">
            입출금 내역
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="info">계좌 정보</TabsTrigger>
          <TabsTrigger value="transactions">거래 내역</TabsTrigger>
          <TabsTrigger value="statistics">통계</TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <div className="account-info bg-white rounded-lg p-6 space-y-4">
            <div className="info-item flex justify-between">
              <span className="text-gray-600">계좌구분</span>
              <span className="font-medium">{account.accountType}</span>
            </div>
            <div className="info-item flex justify-between">
              <span className="text-gray-600">통화</span>
              <span className="font-medium">{account.currency}</span>
            </div>
            <div className="info-item flex justify-between">
              <span className="text-gray-600">개설일</span>
              <span className="font-medium">
                {$util.format.date(account.openDate)}
              </span>
            </div>
            <div className="info-item flex justify-between">
              <span className="text-gray-600">상태</span>
              <span className="font-medium">{account.status}</span>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="transactions">
          <TransactionHistory accountId={accountId!} />
        </TabsContent>

        <TabsContent value="statistics">
          <div className="statistics bg-white rounded-lg p-6">
            {/* 통계 차트 등 */}
            <p>통계 정보</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountDetail;
```

---

## 2. 송금/이체 도메인 상세 구현

### 2.1 타입 정의

```typescript
// domains/transfer/types/index.ts

export interface TransferRequest {
  fromAccount: string;
  toAccount: string;
  toBankCode?: string;
  amount: number;
  memo?: string;
  transferType: 'immediate' | 'scheduled' | 'recurring';
  scheduledDate?: string;
  recurringPeriod?: 'daily' | 'weekly' | 'monthly';
}

export interface TransferResponse {
  transactionId: string;
  transferDate: string;
  status: 'completed' | 'pending' | 'failed' | 'scheduled';
  fee: number;
  totalAmount: number;
}

export interface TransferValidation {
  isValid: boolean;
  errors: {
    field: string;
    message: string;
  }[];
  warnings: {
    field: string;
    message: string;
  }[];
}

export interface BankInfo {
  bankCode: string;
  bankName: string;
  bankIcon?: string;
}
```

### 2.2 송금 페이지 구현

```typescript
// domains/transfer/pages/TransferCreate.tsx

import type { IComponent } from '@/app/types/common';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Button, Input, Select, Spinner } from '@/app/components/ui';
import apiClient from '@/app/common/api/api-client';
import transferUrl from '@/domains/transfer/api/url';
import type { TransferRequest, TransferResponse } from '@/domains/transfer/types';

const TransferCreate: IComponent = () => {
  const location = useLocation();
  const initialFromAccount = location.state?.fromAccount || '';
  
  const [formData, setFormData] = useState<TransferRequest>({
    fromAccount: initialFromAccount,
    toAccount: '',
    toBankCode: '',
    amount: 0,
    memo: '',
    transferType: 'immediate',
  });
  
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // 입력 검증
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.fromAccount) {
      errors.fromAccount = '출금 계좌를 선택해주세요';
    }
    
    if (!formData.toAccount) {
      errors.toAccount = '입금 계좌번호를 입력해주세요';
    } else if (formData.toAccount.length < 10) {
      errors.toAccount = '올바른 계좌번호를 입력해주세요';
    }
    
    if (!formData.amount || formData.amount <= 0) {
      errors.amount = '송금액을 입력해주세요';
    } else if (formData.amount > 10000000) {
      errors.amount = '1회 송금 한도는 1,000만원입니다';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // 송금 실행
  const handleTransfer = async () => {
    // 1. 입력 검증
    if (!validateForm()) {
      await window.$ui.alert({
        title: '입력 오류',
        description: '입력 내용을 확인해주세요',
      });
      return;
    }
    
    // 2. 송금 확인
    const confirmed = await window.$ui.confirm({
      title: '송금 확인',
      description: `
        <div class="space-y-2">
          <p><strong>출금계좌:</strong> ${$util.format.account(formData.fromAccount)}</p>
          <p><strong>입금계좌:</strong> ${$util.format.account(formData.toAccount)}</p>
          <p><strong>송금액:</strong> ${$util.format.currency(formData.amount)}</p>
          <p class="text-lg font-bold text-primary mt-4">
            위 내용으로 송금하시겠습니까?
          </p>
        </div>
      `,
      confirmText: '송금',
      cancelText: '취소',
    });
    
    if (!confirmed) return;
    
    // 3. API 호출
    setLoading(true);
    try {
      const response = await apiClient.request<TransferResponse>({
        method: 'POST',
        url: transferUrl.TRANSFER_CREATE,
        data: formData,
      });
      
      if (response.data.hdr.rsCd === '0000') {
        const result = response.data.bdy;
        
        // 송금 완료
        await window.$ui.alert({
          title: '송금 완료',
          description: `
            <div class="space-y-2">
              <p>송금이 정상적으로 처리되었습니다.</p>
              <p><strong>거래번호:</strong> ${result.transactionId}</p>
              <p><strong>처리시간:</strong> ${$util.format.datetime(result.transferDate)}</p>
              ${result.fee > 0 ? `<p><strong>수수료:</strong> ${$util.format.currency(result.fee)}</p>` : ''}
            </div>
          `,
        });
        
        // 송금 내역 페이지로 이동
        window.$router.push('/transfer/history');
      } else {
        throw new Error(response.data.hdr.rsMsg);
      }
    } catch (error: any) {
      await window.$ui.alert({
        title: '송금 실패',
        description: error.message || '송금 처리 중 오류가 발생했습니다',
      });
    } finally {
      setLoading(false);
    }
  };

  // 계좌번호 자동 포맷팅
  const handleAccountChange = (field: 'fromAccount' | 'toAccount', value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = $util.format.account(cleaned);
    setFormData(prev => ({ ...prev, [field]: cleaned }));
  };

  // 금액 포맷팅
  const handleAmountChange = (value: string) => {
    const amount = parseInt(value.replace(/\D/g, '')) || 0;
    setFormData(prev => ({ ...prev, amount }));
  };

  return (
    <div className="transfer-create-page p-6 max-w-2xl mx-auto">
      <div className="header mb-6">
        <h1 className="text-2xl font-bold">송금</h1>
        <p className="text-gray-600 mt-1">계좌 이체를 진행합니다</p>
      </div>

      <div className="transfer-form bg-white rounded-lg p-6 space-y-6">
        {/* 출금 계좌 */}
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            출금 계좌 <span className="text-red-500">*</span>
          </label>
          <Select
            value={formData.fromAccount}
            onChange={(e) => setFormData({ ...formData, fromAccount: e.target.value })}
            className={validationErrors.fromAccount ? 'border-red-500' : ''}
          >
            <option value="">계좌를 선택하세요</option>
            <option value="110123456789">110-1234-56789 (입출금)</option>
            <option value="220123456789">220-1234-56789 (저축)</option>
          </Select>
          {validationErrors.fromAccount && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.fromAccount}</p>
          )}
        </div>

        {/* 입금 계좌 */}
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            입금 계좌번호 <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            placeholder="계좌번호를 입력하세요"
            value={$util.format.account(formData.toAccount)}
            onChange={(e) => handleAccountChange('toAccount', e.target.value)}
            className={validationErrors.toAccount ? 'border-red-500' : ''}
          />
          {validationErrors.toAccount && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.toAccount}</p>
          )}
        </div>

        {/* 은행 선택 (타행 이체 시) */}
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            입금 은행
          </label>
          <Select
            value={formData.toBankCode}
            onChange={(e) => setFormData({ ...formData, toBankCode: e.target.value })}
          >
            <option value="">우리은행 (본행)</option>
            <option value="004">KB국민은행</option>
            <option value="088">신한은행</option>
            <option value="020">우리은행</option>
            <option value="081">하나은행</option>
          </Select>
        </div>

        {/* 송금액 */}
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            송금액 <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="0"
              value={formData.amount > 0 ? $util.format.number(formData.amount) : ''}
              onChange={(e) => handleAmountChange(e.target.value)}
              className={`text-right pr-12 ${validationErrors.amount ? 'border-red-500' : ''}`}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              원
            </span>
          </div>
          {validationErrors.amount && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.amount}</p>
          )}
          
          {/* 빠른 금액 버튼 */}
          <div className="quick-amounts flex gap-2 mt-2">
            {[10000, 50000, 100000, 500000, 1000000].map(amt => (
              <Button
                key={amt}
                variant="outline"
                size="sm"
                onClick={() => setFormData({ ...formData, amount: amt })}
              >
                {$util.format.number(amt / 10000)}만
              </Button>
            ))}
          </div>
        </div>

        {/* 메모 */}
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            메모 (선택)
          </label>
          <Input
            type="text"
            placeholder="메모를 입력하세요"
            value={formData.memo}
            onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
            maxLength={50}
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.memo.length} / 50자
          </p>
        </div>

        {/* 송금 타입 */}
        <div className="form-group">
          <label className="block text-sm font-medium mb-2">
            송금 방식
          </label>
          <Select
            value={formData.transferType}
            onChange={(e) => setFormData({ ...formData, transferType: e.target.value as any })}
          >
            <option value="immediate">즉시 이체</option>
            <option value="scheduled">예약 이체</option>
            <option value="recurring">자동 이체</option>
          </Select>
        </div>

        {/* 버튼 */}
        <div className="actions flex gap-3 pt-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => window.$router.goBack()}
          >
            취소
          </Button>
          <Button
            className="flex-1"
            onClick={handleTransfer}
            disabled={loading}
          >
            {loading ? (
              <>
                <Spinner className="w-4 h-4 mr-2" />
                처리중...
              </>
            ) : (
              '송금하기'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransferCreate;
```

---

## 3. 대출 도메인 상세 구현

### 3.1 대출 계산기 구현

```typescript
// domains/loan/pages/LoanCalculator.tsx

import type { IComponent } from '@/app/types/common';
import { useState } from 'react';
import { Button, Input, Select } from '@/app/components/ui';

interface LoanCalculation {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  schedule: {
    month: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

const LoanCalculator: IComponent = () => {
  const [loanAmount, setLoanAmount] = useState<number>(10000000);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanPeriod, setLoanPeriod] = useState<number>(12);
  const [repaymentType, setRepaymentType] = useState<'equal_payment' | 'equal_principal'>('equal_payment');
  const [result, setResult] = useState<LoanCalculation | null>(null);

  // 원리금균등상환 계산
  const calculateEqualPayment = () => {
    const principal = loanAmount;
    const monthlyRate = (interestRate / 100) / 12;
    const months = loanPeriod;
    
    // 월 상환액 계산
    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    
    // 상환 스케줄 계산
    const schedule = [];
    let balance = principal;
    
    for (let month = 1; month <= months; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = monthlyPayment - interest;
      balance -= principalPayment;
      
      schedule.push({
        month,
        principal: principalPayment,
        interest,
        balance: Math.max(0, balance),
      });
    }
    
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;
    
    setResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
      schedule,
    });
  };

  // 원금균등상환 계산
  const calculateEqualPrincipal = () => {
    const principal = loanAmount;
    const monthlyRate = (interestRate / 100) / 12;
    const months = loanPeriod;
    const principalPayment = principal / months;
    
    const schedule = [];
    let balance = principal;
    let totalPayment = 0;
    
    for (let month = 1; month <= months; month++) {
      const interest = balance * monthlyRate;
      const payment = principalPayment + interest;
      balance -= principalPayment;
      totalPayment += payment;
      
      schedule.push({
        month,
        principal: principalPayment,
        interest,
        balance: Math.max(0, balance),
      });
    }
    
    const totalInterest = totalPayment - principal;
    const firstMonthPayment = schedule[0].principal + schedule[0].interest;
    
    setResult({
      monthlyPayment: firstMonthPayment,
      totalPayment,
      totalInterest,
      schedule,
    });
  };

  const handleCalculate = () => {
    if (repaymentType === 'equal_payment') {
      calculateEqualPayment();
    } else {
      calculateEqualPrincipal();
    }
  };

  return (
    <div className="loan-calculator-page p-6">
      <h1 className="text-2xl font-bold mb-6">대출 계산기</h1>

      <div className="calculator grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 입력 영역 */}
        <div className="input-section bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">대출 정보 입력</h2>
          
          <div className="space-y-4">
            {/* 대출금액 */}
            <div className="form-group">
              <label className="block text-sm font-medium mb-2">
                대출금액
              </label>
              <Input
                type="text"
                value={$util.format.number(loanAmount)}
                onChange={(e) => setLoanAmount(parseInt(e.target.value.replace(/\D/g, '')) || 0)}
                className="text-right"
              />
              <div className="quick-amounts flex gap-2 mt-2">
                {[1000, 3000, 5000, 10000, 30000].map(amt => (
                  <Button
                    key={amt}
                    variant="outline"
                    size="sm"
                    onClick={() => setLoanAmount(amt * 10000)}
                  >
                    {amt / 10000}억
                  </Button>
                ))}
              </div>
            </div>

            {/* 금리 */}
            <div className="form-group">
              <label className="block text-sm font-medium mb-2">
                연 이자율 (%)
              </label>
              <Input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                className="text-right"
              />
            </div>

            {/* 대출기간 */}
            <div className="form-group">
              <label className="block text-sm font-medium mb-2">
                대출기간 (개월)
              </label>
              <Select
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(parseInt(e.target.value))}
              >
                <option value="12">12개월 (1년)</option>
                <option value="24">24개월 (2년)</option>
                <option value="36">36개월 (3년)</option>
                <option value="60">60개월 (5년)</option>
                <option value="120">120개월 (10년)</option>
                <option value="180">180개월 (15년)</option>
                <option value="240">240개월 (20년)</option>
                <option value="300">300개월 (25년)</option>
                <option value="360">360개월 (30년)</option>
              </Select>
            </div>

            {/* 상환방식 */}
            <div className="form-group">
              <label className="block text-sm font-medium mb-2">
                상환방식
              </label>
              <Select
                value={repaymentType}
                onChange={(e) => setRepaymentType(e.target.value as any)}
              >
                <option value="equal_payment">원리금균등상환</option>
                <option value="equal_principal">원금균등상환</option>
              </Select>
            </div>

            <Button 
              className="w-full"
              onClick={handleCalculate}
            >
              계산하기
            </Button>
          </div>
        </div>

        {/* 결과 영역 */}
        <div className="result-section bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">계산 결과</h2>
          
          {result ? (
            <div className="space-y-4">
              <div className="result-item p-4 bg-blue-50 rounded">
                <p className="text-sm text-gray-600 mb-1">
                  {repaymentType === 'equal_payment' ? '월 상환액' : '첫달 상환액'}
                </p>
                <p className="text-2xl font-bold text-primary">
                  {$util.format.currency(result.monthlyPayment)}
                </p>
              </div>
              
              <div className="result-item p-4 bg-gray-50 rounded">
                <p className="text-sm text-gray-600 mb-1">총 상환액</p>
                <p className="text-xl font-bold">
                  {$util.format.currency(result.totalPayment)}
                </p>
              </div>
              
              <div className="result-item p-4 bg-gray-50 rounded">
                <p className="text-sm text-gray-600 mb-1">총 이자</p>
                <p className="text-xl font-bold text-red-600">
                  {$util.format.currency(result.totalInterest)}
                </p>
              </div>

              {/* 상환 스케줄 */}
              <div className="schedule mt-6">
                <h3 className="font-semibold mb-2">상환 스케줄</h3>
                <div className="max-h-96 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>
                        <th className="p-2">회차</th>
                        <th className="p-2">원금</th>
                        <th className="p-2">이자</th>
                        <th className="p-2">잔액</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.schedule.map(item => (
                        <tr key={item.month} className="border-b">
                          <td className="p-2 text-center">{item.month}</td>
                          <td className="p-2 text-right">
                            {$util.format.number(item.principal)}
                          </td>
                          <td className="p-2 text-right">
                            {$util.format.number(item.interest)}
                          </td>
                          <td className="p-2 text-right">
                            {$util.format.number(item.balance)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              대출 정보를 입력하고 계산하기 버튼을 눌러주세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
```

---

## 4. 공통 패턴 및 베스트 프랙티스

### 4.1 에러 바운더리 구현

```typescript
// shared/components/common/ErrorBoundary.tsx

import type { IComponent } from '@/app/types/common';
import React from 'react';
import { Button } from '@/app/components/ui';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // 에러 로깅 서비스로 전송
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary flex items-center justify-center min-h-screen p-6">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              문제가 발생했습니다
            </h1>
            <p className="text-gray-600 mb-6">
              일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
            </p>
            <Button onClick={this.handleReset}>
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

### 4.2 공통 Form 훅

```typescript
// app/hooks/components/use-form.ts

import { useState } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  validate?: (values: T) => Record<string, string>;
  onSubmit: (values: T) => void | Promise<void>;
}

export function useForm<T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: keyof T, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
    // 입력 시 해당 필드 에러 제거
    if (errors[name as string]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as string];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // 검증
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
  };
}
```

### 4.3 공통 데이터 테이블 컴포넌트

```typescript
// shared/components/common/DataTable.tsx

import type { IComponent } from '@/app/types/common';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/app/components/ui';

interface Column<T> {
  key: string;
  header: string;
  render?: (value: any, item: T) => React.ReactNode;
  width?: string;
  align?: 'left' | 'center' | 'right';
}

interface IDataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  onRowClick?: (item: T) => void;
  emptyMessage?: string;
}

function DataTable<T extends Record<string, any>>({
  data,
  columns,
  keyField,
  onRowClick,
  emptyMessage = '데이터가 없습니다',
}: IDataTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map(column => (
            <TableHead
              key={column.key}
              style={{ width: column.width }}
              className={column.align ? `text-${column.align}` : ''}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map(item => (
            <TableRow
              key={String(item[keyField])}
              onClick={() => onRowClick?.(item)}
              className={onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
            >
              {columns.map(column => (
                <TableCell
                  key={column.key}
                  className={column.align ? `text-${column.align}` : ''}
                >
                  {column.render
                    ? column.render(item[column.key], item)
                    : item[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center py-12 text-gray-500">
              {emptyMessage}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default DataTable;
```

**사용 예시**:

```typescript
<DataTable
  data={accounts}
  keyField="accountId"
  columns={[
    {
      key: 'accountName',
      header: '계좌명',
    },
    {
      key: 'accountNumber',
      header: '계좌번호',
      render: (value) => $util.format.account(value),
    },
    {
      key: 'balance',
      header: '잔액',
      align: 'right',
      render: (value) => $util.format.currency(value),
    },
    {
      key: 'status',
      header: '상태',
      align: 'center',
      render: (value) => <Badge>{value}</Badge>,
    },
  ]}
  onRowClick={(account) => window.$router.push(`/account/detail/${account.accountId}`)}
/>
```

---

이 문서는 실제 업무에서 바로 적용할 수 있는 구현 예제를 제공합니다. 
각 도메인의 패턴을 참고하여 새로운 기능을 개발할 때 일관된 구조와 코드 품질을 유지할 수 있습니다.
