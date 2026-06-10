import { useMutation, useQuery } from '@tanstack/react-query'
import { goalsAPI } from '@/services/api'
import { queryClient } from '@/lib/http/queryClient'
import toast from 'react-hot-toast'

export const useGoals = (params) => {
  return useQuery({
    queryKey: ['goals', params],
    queryFn: () => goalsAPI.list(params),
    select: (data) => data.data,
  })
}

export const useGoal = (id) => {
  return useQuery({
    queryKey: ['goals', id],
    queryFn: () => goalsAPI.get(id),
    select: (data) => data.data,
    enabled: !!id,
  })
}

export const useCreateGoal = () => {
  return useMutation({
    mutationFn: (data) => goalsAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
      toast.success('Goal created successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to create goal')
    },
  })
}

export const useUpdateGoal = (id) => {
  return useMutation({
    mutationFn: (data) => goalsAPI.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
      queryClient.invalidateQueries({ queryKey: ['goals', id] })
      toast.success('Goal updated successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update goal')
    },
  })
}

export const useDeleteGoal = () => {
  return useMutation({
    mutationFn: (id) => goalsAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] })
      toast.success('Goal deleted successfully!')
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete goal')
    },
  })
}
